import Nav from "../../components/Nav/Nav";
import * as S from "./FeedNewRoutine.style";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
import { useEffect, useRef, useState } from "react";
import RoutineAccordion from "../../components/RoutineAccordion/RoutineAccordion";
import { Props as ExerciseAccordionProps } from "../../components/ExerciseAccordion/ExerciseAccordion";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import TextArea from "../../components/TextArea/TextArea";

const tmpWriter = "가슴왕 재규니";
const tmpExerciseAccordionData: ExerciseAccordionProps[] = [
  {
    exerciseName: "벤치프레스",
    exercisePart: "chest",
    type: "record",
  },
  {
    exerciseName: "벤치프레스",
    exercisePart: "chest",
    type: "record",
  },
  {
    exerciseName: "벤치프레스",
    exercisePart: "chest",
    type: "record",
  },
  {
    exerciseName: "벤치프레스",
    exercisePart: "chest",
    type: "record",
  },
  {
    exerciseName: "벤치프레스",
    exercisePart: "chest",
    type: "record",
  },
  {
    exerciseName: "벤치프레스",
    exercisePart: "chest",
    type: "record",
  },
  {
    exerciseName: "벤치프레스",
    exercisePart: "chest",
    type: "record",
  },
  {
    exerciseName: "벤치프레스",
    exercisePart: "chest",
    type: "record",
  },
  {
    exerciseName: "벤치프레스",
    exercisePart: "chest",
    type: "record",
  },

  {
    exerciseName: "벤치프레스",
    exercisePart: "chest",
    type: "record",
  },
  {
    exerciseName: "벤치프레스",
    exercisePart: "chest",
    type: "record",
  },
];

function FeedNewRoutine() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [exercises, setExercises] = useState<ExerciseAccordionProps[]>([]);

  const titleRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    setWriter(tmpWriter);
    setExercises(tmpExerciseAccordionData);
  }, []);
  return (
    <>
      <Nav type="top" />

      <S.BoardContainer>
        <S.BoardHeader>
          <S.WriterInfoWrapper>
            <S.WriterProfileImgWrapper>
              <S.WriterProfileImg src="" alt="img" />
            </S.WriterProfileImgWrapper>
            <S.BoardTitle>{writer}</S.BoardTitle>
          </S.WriterInfoWrapper>
        </S.BoardHeader>

        <S.BoardTitleWrapper>
          <Input placeholder="제목을 입력해주세요" defaultValue="" ref={titleRef} />
        </S.BoardTitleWrapper>

        <S.BoardDescriptionWrapper>
          <TextArea placeholder="내용을 입력해주세요" defaultValue="" height="150px" />
        </S.BoardDescriptionWrapper>
      </S.BoardContainer>

      <S.RoutineContainer>
        {exercises.map(({ exerciseName, exercisePart, type }, index) => (
          <RoutineAccordion
            routineName={`Day ${index + 1}`}
            // 추가
          />
        ))}
      </S.RoutineContainer>

      <S.RoutineFunctionsContainer>
        <Button display="flex" type="border" size="large" onClick={() => {}}>
          취소
        </Button>
        <Button display="flex" type="fill" size="large" onClick={() => {}}>
          공유하기
        </Button>
      </S.RoutineFunctionsContainer>

      <Nav type="home" />
    </>
  );
}

export default FeedNewRoutine;
