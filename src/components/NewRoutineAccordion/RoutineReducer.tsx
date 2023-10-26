export type Action = { type: "TOGGLE_isSpreadRoutine"; dayIndex: number };

export type Routine = Day[];

export interface Day {
  isSpreadExercise: boolean;
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  part: string;
  restTime: RestTime;
  isSpreadSets: boolean;
  exerciseSets: ExerciseSet[];
}

export interface ExerciseTypes {
  chest: string;
  back: string;
  shoulders: string;
  legs: string;
  biceps: string;
  triceps: string;
  abs: string;
  cardio: string;
  [key: string]: string;
}

export interface RestTime {
  miniutes: number;
  seconds: number;
}

export interface ExerciseSet {
  setNum: number;
  weights: number;
  counts: number;
  completed: boolean;
}

export default function routineReducer(routine: Routine, action: Action) {
  switch (action.type) {
    case "TOGGLE_isSpreadRoutine": {
      const newRoutine = routine.map((day, index) => {
        const isTargetDay = index === action.dayIndex;

        if (isTargetDay) {
          return {
            ...day,
            isSpreadExercise: !day.isSpreadExercise,
          };
        }

        return day;
      });

      return newRoutine;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
