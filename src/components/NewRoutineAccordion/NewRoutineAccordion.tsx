import { useReducer } from "react";

import * as S from "./NewRoutineAccordion.style";
import * as Icon from "../Icon";
import routineReducer, { Routine } from "./RoutineReducer";
import NewExerciseAccordion from "../NewExerciseAccordion/NewExerciseAccordion";

// export interface Props {
//   exerciseName: string;
//   exercisePart: string;
//   type: "record" | "recorded";
// }

const tmpRoutine: Routine = [
  {
    isSpreadExercise: false,
    exercises: [
      {
        isSpreadSets: false,
        name: "벤치 프레스",
        part: "가슴",
        restTime: {
          miniutes: 5,
          seconds: 59,
        },
        exerciseSets: [
          {
            setNum: 1,
            weights: 130,
            counts: 0,
            completed: false,
          },
        ],
      },
    ],
  },
];

export default function NewRoutineAccordion() {
  const [routine, dispatch] = useReducer(routineReducer, tmpRoutine);

  const handleDaySpread = (dayIndex: number) => {
    dispatch({
      type: "TOGGLE_isSpreadRoutine",
      dayIndex,
    });
  };

  return (
    <>
      {routine.map((day, index) => {
        <S.RoutineWrapper>
          <S.RoutineHeader onClick={() => handleDaySpread(index)}>
            <S.Icon isSpread={day.isSpreadExercise}>
              <Icon.DownArrow size="24" />
            </S.Icon>
            {`Day ${index + 1}`}
          </S.RoutineHeader>
          <S.Exercises>
            {day.isSpreadExercise && (
              <NewExerciseAccordion exercises={day.exercises} type="record" />
            )}
          </S.Exercises>
        </S.RoutineWrapper>;
      })}
    </>
  );
}
