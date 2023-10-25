import Nav from "../../components/Nav/Nav";
import * as S from "./FeedRoutineDetail.styled";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
import ExerciseAccordion, {
  Props as ExerciseAccordionProps,
} from "../../components/ExerciseAccordion/ExerciseAccordion";
import { useEffect, useState } from "react";
import RoutineAccordion from "../../components/RoutineAccordion/RoutineAccordion";

export default function FeedRoutineDetail() {
  const tmpWriter = "가슴왕 재규니";

  const tmpDescription = `
  벤치프레스만 오지게 해버리다가
  가슴이 터져버렸다.
  `;

  const tmpTitle = "벤치프레스를 조지다.";

  const tmpExerciseAccordionData: ExerciseAccordionProps[] = [
    {
      exerciseName: "벤치프레스",
      exercisePart: "chest",
      type: "recorded",
    },
    {
      exerciseName: "벤치프레스",
      exercisePart: "chest",
      type: "recorded",
    },
    {
      exerciseName: "벤치프레스",
      exercisePart: "chest",
      type: "recorded",
    },
    {
      exerciseName: "벤치프레스",
      exercisePart: "chest",
      type: "recorded",
    },
    {
      exerciseName: "벤치프레스",
      exercisePart: "chest",
      type: "recorded",
    },
    {
      exerciseName: "벤치프레스",
      exercisePart: "chest",
      type: "recorded",
    },
  ];

  const [writer, setWriter] = useState("작성자");
  const [title, setTitle] = useState("제목");
  const [discription, setDiscription] = useState("게시글을 불러오는 중 입니다...");
  const [exercises, setExercises] = useState<ExerciseAccordionProps[]>([
    {
      exerciseName: "운동을 불러오는 중 입니다...",
      exercisePart: "...",
      type: "record",
    },
  ]);

  useEffect(() => {
    setWriter(tmpWriter);
    setTitle(tmpTitle);
    setDiscription(tmpDescription);
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

          <S.FunctionsWrapper>
            <S.FunctionIconWrapper>
              <Icon.BookMark size={FONT.L} color={COLOR.Gray1} />
            </S.FunctionIconWrapper>
            <S.FunctionIconWrapper>
              <Icon.Heart size={FONT.L} color={COLOR.Gray1} />
            </S.FunctionIconWrapper>

            <S.FunctionIconWrapper>
              <Icon.Trash size={FONT.L} color={COLOR.Gray1} />
            </S.FunctionIconWrapper>
          </S.FunctionsWrapper>
        </S.BoardHeader>

        <S.BoardTitleWrapper>
          <S.BoardTitle>{title}</S.BoardTitle>
          <S.BoardWritedTime>5천 시간 전</S.BoardWritedTime>
        </S.BoardTitleWrapper>

        <S.BoardDescriptionWrapper>
          {discription.split("\n").map((line) => (
            <S.Description>{line}</S.Description>
          ))}
        </S.BoardDescriptionWrapper>

        <S.BoardFooter>
          <S.UserInterectionWrapper>
            <Icon.Heart size={FONT.M} color={COLOR.Gray2} />
            <S.BoardLikesCount>1.2K</S.BoardLikesCount>

            <Icon.Share size={FONT.M} color={COLOR.Gray2} />
            <S.BoardScrapsCount>2M</S.BoardScrapsCount>
          </S.UserInterectionWrapper>

          <S.UserInterectionWrapper>
            <Icon.PlusCircle size={FONT.M} color={COLOR.Gray2} />
            <S.UseFunctionText>내 루틴으로 작성하기</S.UseFunctionText>
          </S.UserInterectionWrapper>
        </S.BoardFooter>

        <S.BoardFooter>
          <S.UserInterectionWrapperRight>
            <Icon.PlusCircle size={FONT.M} color={COLOR.Gray2} />
            <S.UseFunctionText>모든 루틴을 일지에 추가하기</S.UseFunctionText>
          </S.UserInterectionWrapperRight>
        </S.BoardFooter>
      </S.BoardContainer>

      <S.RoutineContainer>
        {exercises.map(({ exerciseName, exercisePart, type }, index) => (
          <RoutineAccordion
            routineName={`Day ${index + 1}`}
            // 추가
          />
        ))}
        {/* 
        <S.RoutineFunctionsContainer>
          <Button display="flex" type="border" size="large" onClick={() => {}}>
            운동 삭제
          </Button>
          <Button display="flex" type="fill" size="large" onClick={() => {}}>
            운동 추가
          </Button>
        </S.RoutineFunctionsContainer> */}
      </S.RoutineContainer>

      <Nav type="home" />
    </>
  );
}
