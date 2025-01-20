import { useNavigate } from "react-router";
import Button from "../../../../components/Button/Button";
import ExerciseAccordion from "../../../../components/ExerciseAccordion/ExerciseAccordion";
import * as S from "./ExerciseDiarySuccess.style";
import * as Icon from "../../../../components/Icon";
import { useSearchParams } from "react-router-dom";
import * as COLOR from "../../../../constants/color";
import moment from "moment";
import { Action, Day } from "../../../../hooks/useDay";
import DeleteButton from "../../../../components/DeleteButton/DeleteButton";
import useExerciseDiaryAPI from "../../../../api/useExerciseDiaryAPI";

interface Props {
  day: Day;
  dayDispatch: React.Dispatch<Action>;
  journalId: number;
}

export default function ExerciseDiarySuccess({ day, dayDispatch, journalId }: Props) {
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  const navigate = useNavigate();
  const {
    // completed,
    dayDate,
    exerciseTime: { hours, minutes, seconds },
    exercises,
    // id,
    // order,
    // spread,
  } = day;
  const backHandler = () => {
    navigate("/diary");
  };

  const shareHandler = () => {
    navigate("/feed/diary/share");
  };

  const { requestDeleteJournal } = useExerciseDiaryAPI();

  const [yy, mm, dd] = String(dayDate)?.split("-") as string[];

  return (
    <>
      <S.Wrapper>
        <S.Icon>
          <DeleteButton
            color={COLOR.Gray2}
            callback={() => requestDeleteJournal(date as string, journalId)}
            conFirmMessage="정말 삭제하시겠습니까?"
          />
        </S.Icon>

        {date === moment(new Date()).format("YYYY-MM-DD") && (
          <>
            <S.Congratulation>축하합니다!</S.Congratulation>
            <S.Congratulation>오늘의 운동을 완료하셨습니다!</S.Congratulation>
          </>
        )}

        <S.Congratulation>{`${yy}년 ${mm}월 ${dd}일`}</S.Congratulation>
        <S.Congratulation>운동일지</S.Congratulation>

        <S.TimeRecord>
          <Icon.Clock color={COLOR.Black} />
          {`${String(hours).padStart(1, "0")}:`}
          {`${String(minutes).padStart(2, "0")}:`}
          {`${String(seconds).padStart(2, "0")}`}
        </S.TimeRecord>
        <S.Exercises>
          <ExerciseAccordion
            exercises={exercises}
            dayIndex={0}
            dispatch={dayDispatch}
            type="recorded"
          />
        </S.Exercises>
        <S.ButtonBox>
          {date === moment(new Date()).format("YYYY-MM-DD") ? (
            <>
              <Button display="flex" size="large" type="border" onClick={backHandler}>
                내 운동일지로
              </Button>
              <Button display="flex" size="large" type="fill" onClick={shareHandler}>
                일지 공유하기
              </Button>
            </>
          ) : (
            <Button display="block" size="medium" type="fill" onClick={backHandler}>
              뒤로
            </Button>
          )}
        </S.ButtonBox>
      </S.Wrapper>
    </>
  );
}
