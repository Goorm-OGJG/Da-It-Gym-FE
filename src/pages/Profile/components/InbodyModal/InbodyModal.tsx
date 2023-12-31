import { useRef, useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import * as S from "./InbodyModal.style";
import useProfileAPI from "../../../../api/useProfileAPI";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import { RoutineSummary } from "../Routines/Routines";

interface Props {
  setIsInbodyClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InbodyModal({ setIsInbodyClick }: Props) {
  const date = useRef<HTMLInputElement>(null);
  const score = useRef<HTMLInputElement>(null);
  const muscle = useRef<HTMLInputElement>(null);
  const fat = useRef<HTMLInputElement>(null);
  const weight = useRef<HTMLInputElement>(null);
  const basal = useRef<HTMLInputElement>(null);
  const routineId = useRef<HTMLSelectElement>(null);
  const params = useParams();
  const { requestInbody, requestFeedRoutineList } = useProfileAPI();

  const cancelHandler = () => {
    setIsInbodyClick(false);
  };

  const page = useRef(0);
  const hasNext = useRef(true);
  const [routines, setRoutines] = useState<RoutineSummary[]>([]);
  const submitHandler = () => {
    const isPositive = /^\d+\.?\d+$/;
    const emptyCheck =
      date.current!.value &&
      score.current!.value &&
      muscle.current!.value &&
      fat.current!.value &&
      weight.current!.value &&
      basal.current!.value &&
      routineId.current!.value
        ? true
        : false;
    const id = routineId.current!.value === "null" ? null : routineId.current!.value;
    if (!emptyCheck) {
      toast.error("빈 칸을 모두 채워주세요");
    } else {
      const validCheck =
        isPositive.test(score.current!.value) &&
        isPositive.test(muscle.current!.value) &&
        isPositive.test(fat.current!.value) &&
        isPositive.test(weight.current!.value) &&
        isPositive.test(basal.current!.value);

      if (!validCheck) {
        toast.error("숫자만 입력해주세요.");
      } else {
        const payload = {
          measureAt: date.current!.value,
          inbodyScore: parseInt(score.current!.value),
          skeletalMuscleMass: parseInt(muscle.current!.value),
          bodyFatRatio: parseInt(fat.current!.value),
          weight: parseInt(weight.current!.value),
          basalMetabolicRate: parseInt(basal.current!.value),
          routineId: id,
        };
        requestInbody(payload);
        setIsInbodyClick(false);
        // console.log("제출제출");
      }
    }
  };

  useEffect(() => {
    requestFeedRoutineList(
      params.nickname as string,
      page.current,
      100,
      setRoutines,
      hasNext,
    );
  }, []);
  return (
    <S.Overlay>
      <S.Wrapper>
        <S.Inputs>
          <S.InputBox>
            <S.TitleWrapper>
              <S.InputTitle>루틴</S.InputTitle>
              <S.Required>*</S.Required>
            </S.TitleWrapper>
            <S.SelectBox ref={routineId}>
              <option value="null">없음</option>
              {routines.map((routine) => (
                <option value={routine.id}>{routine.title}</option>
              ))}
            </S.SelectBox>
          </S.InputBox>
          <S.CalendarLabel>
            <S.Calendartitle>
              측정일<S.Required>*</S.Required>
            </S.Calendartitle>
            <S.DateInput type="date" ref={date} />
          </S.CalendarLabel>

          <Input inputTitle="인바디 점수" ref={score} required={true} />
          <Input inputTitle="골격근량" ref={muscle} required={true} />
          <Input inputTitle="체지방률(%)" ref={fat} required={true} />
          <Input inputTitle="체중" ref={weight} required={true} />
          <Input inputTitle="기초대사량" ref={basal} required={true} />
        </S.Inputs>
        <S.ButtonBox>
          <Button display="flex" type="border" size="medium" onClick={cancelHandler}>
            취소
          </Button>
          <Button display="flex" type="fill" size="medium" onClick={submitHandler}>
            등록하기
          </Button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Overlay>
  );
}
