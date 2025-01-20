import { useSearchParams } from "react-router-dom";
import ExerciseDiaryDefault from "./components/ExerciseDiaryDefault/ExerciseDiaryDefault";
import ExerciseNav from "./components/ExerciseNav/ExerciseNav";
import ExerciseDiarySuccess from "./components/ExerciseDiarySuccess/ExerciseDiarySuccess";
import { useEffect, useMemo, useRef } from "react";
import useExerciseDiaryAPI from "../../api/useExerciseDiaryAPI";
import { useDay } from "../../hooks/useDay";
import { useRecoilState } from "recoil";
import { isExistState, markState } from "../../recoil/exerciseState";

export default function ExerciseDiary() {
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  const [isExist, setIsExist] = useRecoilState(isExistState);
  const { requestJournalDetail, requestDeleteJournal } = useExerciseDiaryAPI();
  const [day, dayDispatch] = useDay();
  const [mark, setMark] = useRecoilState(markState);
  const isMarked = useMemo(() => mark.includes(date as string), [date, mark]);
  const dayRef = useRef(day);
  const isExistRef = useRef(isExist);

  useEffect(() => {
    isExistRef.current = isExist; // 최신 day 값 업데이트
  }, [isExist]);

  useEffect(() => {
    dayRef.current = day; // 최신 day 값 업데이트
  }, [day]);

  useEffect(() => {
    if (isMarked)
      requestJournalDetail(date as string, dayDispatch, undefined, undefined, setIsExist);

    return () => {
      if (date && isExistRef.current && dayRef.current.exercises.length === 0)
        requestDeleteJournal(date as string, Number(dayRef.current.id), setMark);
    };
  }, [date]); // requestJournalDetail 추가 시 무한 재랜더링

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
