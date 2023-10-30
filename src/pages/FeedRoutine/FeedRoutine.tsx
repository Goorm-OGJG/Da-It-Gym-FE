import { useState } from "react";
import HashTagButton from "../../components/HashtagButton/HashtagButton";
import Nav from "../../components/Nav/Nav";
import RoutineUser from "../../components/RoutineUser/RoutineUser";
import * as S from "./FeedRoutine.style";

const tempData = [
  {
    userImg:
      "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
    userName: "가슴왕 재규니",
    info: "안녕하세요 가슴을 조지는 루틴입니다. ",
    likeCount: 1000,
    shareCount: 100000,
    createdAt: new Date(),
  },
  {
    userImg:
      "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
    userName: "가슴왕 재규니",
    info: "안녕하세요 가슴을 조지는 루틴입니다. ",
    likeCount: 1000,
    shareCount: 100000,
    createdAt: new Date(),
  },
  {
    userImg:
      "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
    userName: "가슴왕 재규니",
    info: "안녕하세요 가슴을 조지는 루틴입니다. ",
    likeCount: 1000,
    shareCount: 100000,
    createdAt: new Date(),
  },
  {
    userImg:
      "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
    userName: "가슴왕 재규니",
    info: "안녕하세요 가슴을 조지는 루틴입니다. ",
    likeCount: 1000,
    shareCount: 100000,
    createdAt: new Date(),
  },
  {
    userImg:
      "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
    userName: "가슴왕 재규니",
    info: "안녕하세요. 오늘도 역시 가슴을 조지는 루틴입니다.abcdefghi",
    likeCount: 1000,
    shareCount: 100000,
    createdAt: new Date(),
  },
];

export type SelectedDivision = "무분할" | "2분할" | "3분할" | "4분할" | "5분할" | "6분할";
export type SelectedTab = "전체 보기" | "팔로우 보기" | "추천";

export default function FeedRoutine() {
  const [selectedTab, setSelectedTab] = useState<SelectedTab>("전체 보기");
  const handleSelectedTab = (tab: SelectedTab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <S.Header>
        <Nav type="top" />

        <S.ExercisePartLabels>
          <HashTagButton label="무분할" type="division" />
          <HashTagButton label="2분할" type="division" />
          <HashTagButton label="3분할" type="division" />
          <HashTagButton label="4분할" type="division" />
          <HashTagButton label="5분할" type="division" />
          <HashTagButton label="6분할+" type="division" />
        </S.ExercisePartLabels>

        <S.Tabs>
          <S.Tab
            isSelected={selectedTab === "전체 보기"}
            onClick={() => {
              handleSelectedTab("전체 보기");
            }}
          >
            전체 보기
          </S.Tab>
          <S.Tab
            isSelected={selectedTab === "팔로우 보기"}
            onClick={() => {
              handleSelectedTab("팔로우 보기");
            }}
          >
            팔로우 보기
          </S.Tab>
          <S.Tab
            isSelected={selectedTab === "추천"}
            onClick={() => {
              handleSelectedTab("추천");
            }}
          >
            추천
          </S.Tab>
        </S.Tabs>
      </S.Header>

      <S.Routines>
        {tempData.map((routine) => (
          <RoutineUser
            src={routine.userImg}
            userName={routine.userName}
            info={routine.info}
            likeCount={routine.likeCount.toString()}
            shareCount={routine.shareCount.toString()}
            timeAgo={routine.createdAt.toDateString()}
          />
        ))}
      </S.Routines>

      <Nav type="home" />
    </>
  );
}
