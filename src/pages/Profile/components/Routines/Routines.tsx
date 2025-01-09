import { useEffect, useState, useRef } from "react";
import useProfileAPI from "../../../../api/useProfileAPI";
import RoutineUser from "../../../../components/RoutineUser/RoutineUser";
import * as S from "./Routines.style";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import FeedDiaryEmpty from "../../../../components/FeedEmptyDataUI/FeedDiaryEmpty";

export interface RoutineSummary {
  id: number;
  title: string;
  author: string;
  authorImg: string;
  description: string;
  liked: boolean;
  likeCounts: number;
  scraped: boolean;
  scrapCounts: number;
  createdAt: string;
  division: number;
}

export default function Routines() {
  const { requestFeedRoutineList, requestFeedRoutineScrap } = useProfileAPI();
  const params = useParams();
  const [query] = useSearchParams();
  const section = query.get("section");
  // const type =
  // const [type, setType] = useState<string>("");
  const [routines, setRoutines] = useState<RoutineSummary[]>([]);
  // const [page, setPage] = useState(0);
  // console.log(query);
  const page = useRef(0);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const hasNext = useRef(true);
  console.log(routines);
  const loadMoreFeed = () => {
    // 🔥 API 요청 loadMoreFeed() 불러오기 : 1) 불러올때 setFeedDiaryData에 담아서 가져오기 requestFeedDiary(nickname as string, page, 9, setFeedDiaryData);
    // 📧 요청할때 보내야할 데이터 1. 분할 2.가슴 어깨 등 .. 3. 전체보기 + 팔로우보기 + 추천 중에 무엇인지 담아서 요청
    if (hasNext.current) {
      switch (section) {
        case "routines":
          requestFeedRoutineList(
            params.nickname as string,
            page.current,
            20,
            setRoutines,
            hasNext,
          );
          break;
        case "bookmark":
          requestFeedRoutineScrap(setRoutines, page.current, hasNext);
          break;
      }

      page.current += 1;
    }
  };
  // 무한 스크롤
  useEffect(() => {
    console.log("1");
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMoreFeed();
          // console.log(page + 1);
          // isIntersecting 관찰 되었을때 🔥 API 요청 loadMoreFeed() 불러오기
        }
      }),
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, []);

  useEffect(() => {
    page.current = 0;
    setRoutines([]);
    hasNext.current = true;
  }, [params.nickname, section]);

  return (
    <S.RoutineUsers>
      {routines.length > 0 ? (
        <>
          {routines.map(
            ({
              title,
              author,
              authorImg,
              createdAt,
              likeCounts,
              scrapCounts,
              id,
              division,
            }) => (
              <RoutineUser
                key={id}
                routineId={id}
                src={authorImg}
                userName={author}
                info={title}
                timeAgo={createdAt}
                likeCount={likeCounts}
                shareCount={scrapCounts}
                label={division === 1 ? `무분할` : `${division}분할`}
              />
            ),
          )}
        </>
      ) : (
        <FeedDiaryEmpty>
            나만의 루틴을 만들어 보세요!
        </FeedDiaryEmpty>
      )}
      <S.Observer ref={observerRef} />
    </S.RoutineUsers>
  );
}
