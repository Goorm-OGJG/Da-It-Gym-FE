import ExerciseAccordion from "../ExerciseAccordion/ExerciseAccordion";
import * as S from "./RoutineAccordion.style";
import * as Icon from "../Icon";
import { Routine } from "../../hooks/useRoutine";
import { Day } from "../../hooks/useDay";
import { Action as RoutineAction } from "../../hooks/useRoutine";
import { Action as DayAction } from "../../hooks/useDay";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";
import { useNavigate } from "react-router";
export interface Props {
  routine: Routine;
  dispatch: React.Dispatch<RoutineAction> | React.Dispatch<DayAction>;
  type: "record" | "recorded";
  mulitple: boolean;
  title?: string;
}

export default function RoutineAccordion({
  routine,
  dispatch,
  type,
  mulitple,
  title,
}: Props) {
  const navigate = useNavigate();

  const handleSpread = (dayIndex: number) => {
    dispatch({ type: "UPDATE_EXERCISES_IS_SPREAD", dayIndex });
  };

  const handleCreateDay = () => {
    (dispatch as React.Dispatch<RoutineAction>)({ type: "CREATE_DAY" });
  };

  const handleDeleteDay = () => {
    (dispatch as React.Dispatch<RoutineAction>)({ type: "DELETE_DAY" });
  };

  const handleDayForWriteMyDiary = (day: Day) => {
    navigate(`/feed/import?id=${day.id}`, {
      state: {
        day: day,
      },
    });
  };

  return (
    <>
      {mulitple &&
        routine.days.map((day: Day, index) => (
          <S.RoutineWrapper key={`day ${index + 1}`}>
            <S.RoutineHeader onClick={() => handleSpread(index)}>
              <S.IconWrapper spread={day.spread}>
                <Icon.DownArrow size="24" />
              </S.IconWrapper>

              <S.UserInterectionWrapper>
                {`Day ${day.order}`}
                <S.UseDayWrapper
                  onClick={() => {
                    handleDayForWriteMyDiary(day);
                  }}
                >
                  {type === "recorded" && (
                    <>
                      <Icon.AddCircle size={FONT.M} color={COLOR.Gray2} />
                      <S.UseFunctionText>내 운동일지로 작성하기</S.UseFunctionText>
                    </>
                  )}
                </S.UseDayWrapper>
              </S.UserInterectionWrapper>
            </S.RoutineHeader>
            <S.Exercises>
              {day.spread && (
                <ExerciseAccordion
                  exercises={day.exercises}
                  dayIndex={index}
                  dispatch={dispatch}
                  type={type}
                />
              )}
            </S.Exercises>
          </S.RoutineWrapper>
        ))}

      {!mulitple && (
        <S.RoutineWrapper>
          <S.RoutineHeader onClick={() => handleSpread(0)}>
            <S.IconWrapper spread={routine.days[0].spread}>
              <Icon.DownArrow size="24" />
            </S.IconWrapper>
            {title}
          </S.RoutineHeader>
          <S.Exercises>
            {routine.days[0].spread && (
              <ExerciseAccordion
                exercises={routine.days[0].exercises}
                dayIndex={0}
                dispatch={dispatch}
                type={type}
              />
            )}
          </S.Exercises>
        </S.RoutineWrapper>
      )}

      {type === "record" && mulitple && (
        <S.FunctionsContainer>
          <S.FunctionWrapper onClick={handleCreateDay}>
            <Icon.AddCircle size={FONT.L} />
            <S.FunctionText>Day 추가</S.FunctionText>
          </S.FunctionWrapper>
          <S.FunctionWrapper onClick={handleDeleteDay}>
            <Icon.Trash size={FONT.L} />
            <S.FunctionText>Day 삭제</S.FunctionText>
          </S.FunctionWrapper>
        </S.FunctionsContainer>
      )}
    </>
  );
}
