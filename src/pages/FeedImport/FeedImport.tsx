import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import ExerciseCalendar, {
  Value,
} from "../../components/ExerciseCalendar/ExerciseCalendar";
import * as S from "./FeedImport.style";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import moment from "moment";
import useExerciseDiaryAPI from "../../api/useExerciseDiaryAPI";

export interface Replication {
  journalDate: string;
  dayId: string;
}

export default function FeedImport() {
  const [query] = useSearchParams();
  const ids = query.get("id");
  const type = query.get("type");
  const [value, onChange] = useState<Value>(new Date());
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate(-1);
  };
  const { requestJournalReplication, requestRoutineReplication } = useExerciseDiaryAPI();

  const addHandler = () => {
    const selectedDate = value as Date;
    const ids_split = ids!.split(",");
    const routines: Replication[] = ids_split.map((id, i) => {
      const addDate = new Date(selectedDate);
      const importDate = new Date(addDate.setDate(selectedDate.getDate() + i));
      const importDateTransform = moment(importDate).format("YYYY-MM-DD");

      return { journalDate: importDateTransform, dayId: id };
    });
    if (type === "diary") {
      requestJournalReplication(routines[0].dayId, routines[0].journalDate);
    } else {
      requestRoutineReplication(routines);
    }

    const move = moment(selectedDate).format("YYYY-MM-DD");
    navigate(`/diary?date=${move}`);
  };
  return (
    <>
      <S.Wrapper>
        <S.Header>날짜를 선택해주세요</S.Header>
        <S.CalendarWrapper>
          <ExerciseCalendar value={value} onChange={onChange} />
        </S.CalendarWrapper>
        <S.ButtonBox>
          <Button display="flex" size="medium" type="border" onClick={cancelHandler}>
            취소
          </Button>
          <Button display="flex" size="medium" type="fill" onClick={addHandler}>
            추가하기
          </Button>
        </S.ButtonBox>
      </S.Wrapper>
    </>
  );
}
