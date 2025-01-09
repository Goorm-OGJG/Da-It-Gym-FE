import { useSearchParams } from "react-router-dom";
import ExerciseDiaryDefault from "./components/ExerciseDiaryDefault/ExerciseDiaryDefault";
import ExerciseNav from "./components/ExerciseNav/ExerciseNav";
import ExerciseDiarySuccess from "./components/ExerciseDiarySuccess/ExerciseDiarySuccess";
import { useEffect, useMemo } from "react";
import useExerciseDiaryAPI from "../../api/useExerciseDiaryAPI";
import { useDay } from "../../hooks/useDay";
import { useRecoilState, useRecoilValue } from "recoil";
import { isExistState, markState } from "../../recoil/exerciseState";

export default function ExerciseDiary() {
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  const [isExist, setIsExist] = useRecoilState(isExistState);
  const { requestJournalDetail } = useExerciseDiaryAPI();
  const [day, dayDispatch] = useDay();
  const mark = useRecoilValue(markState);
  const isMarked = useMemo(() => mark.includes(date as string), [date, mark]);

  useEffect(() => {
    if (isMarked) {
        requestJournalDetail(
          date as string,
          dayDispatch,
          undefined,
          undefined,
          setIsExist,
        );
    }
  }, [date, isExist, setIsExist, mark, dayDispatch]); // requestJournalDetail 추가 시 무한 재랜더링
  return (
    <>
       {isMarked && date && day.completed ? (
        <>
          <ExerciseDiarySuccess
            day={day}
            dayDispatch={dayDispatch}
            journalId={day.id as number}
          />
        </>
      ) : (
        <>
          <ExerciseDiaryDefault day={day} dayDispatch={dayDispatch} />
          <ExerciseNav journalId={day.id as number} />
        </>
      )}
    </>
  );
}
