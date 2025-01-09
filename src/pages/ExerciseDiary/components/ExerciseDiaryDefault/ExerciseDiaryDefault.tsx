import { useState } from "react";
import * as S from "./ExerciseDiaryDefault.style";
import * as Icon from "../../../../components/Icon";
import ExerciseCalendar, {
  Value,
} from "../../../../components/ExerciseCalendar/ExerciseCalendar";
import ExerciseAccordion from "../../../../components/ExerciseAccordion/ExerciseAccordion";
import { Action, Day } from "../../../../hooks/useDay";
import moment from "moment";
import Button from "../../../../components/Button/Button";
import useExerciseDiaryAPI from "../../../../api/useExerciseDiaryAPI";
import { isExistState, markState } from "../../../../recoil/exerciseState";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useSearchParams } from "react-router-dom";

interface Props {
  day: Day;
  dayDispatch: React.Dispatch<Action>;
}

export default function ExerciseDiaryDefault({ day, dayDispatch }: Props) {
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  const [showCalendar, setShowCalendar] = useState(true);
  const [value, onChange] = useState<Value>(null);
  const [isExist, setIsExist] = useRecoilState(isExistState);
  const setMark = useSetRecoilState(markState);
  const showCalendarHandler = () => {
    setShowCalendar((prev) => !prev);
  };

  const { requestPostJournal } = useExerciseDiaryAPI();

  const addDiaryHandler = () => {
    const date = moment(value as Date).format("YYYY-MM-DD");
    requestPostJournal(date, setIsExist, setMark, dayDispatch);
  };
  // console.log(isExist);
  return (
    <S.Wrapper>
      <S.CalendarAccordion>
        <S.CalendarHeader onClick={showCalendarHandler}>
          <S.Arrow showCalendar={showCalendar}>
            <Icon.DownArrow />
          </S.Arrow>
          {showCalendar ? "캘린더 접기" : "캘린더 보기"}
        </S.CalendarHeader>
        {showCalendar && <ExerciseCalendar value={value} onChange={onChange} />}
      </S.CalendarAccordion>
      {/* 운동목록들 */}
      <>
        {date && (
          <>
            {!isExist ? (
              <S.ExerciseBox>
                <Button
                  display="flex"
                  size="medium"
                  type="fill"
                  onClick={addDiaryHandler}
                >
                  운동일지 추가하기
                </Button>
              </S.ExerciseBox>
            ) : (
              <S.ExerciseBox>
                <ExerciseAccordion
                  exercises={day.exercises}
                  dayIndex={0}
                  dispatch={dayDispatch}
                  type="record"
                  day={day}
                />
              </S.ExerciseBox>
            )}
          </>
        )} 
      </>
    </S.Wrapper>
  );
}
