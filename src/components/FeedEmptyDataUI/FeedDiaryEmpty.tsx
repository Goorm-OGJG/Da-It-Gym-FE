import * as S from "./FeedDiaryEmpty.style";
interface FeedDiaryEmptyProps {
  children: React.ReactNode;
}
function FeedDiaryEmpty({ children }: FeedDiaryEmptyProps) {
  return (
    <S.EmptyWrapper>
      <S.EmptyImgBox>
        <S.EmptyImage src="/images/noData.png" />
      </S.EmptyImgBox>
      <S.EmptyComment>
        {children}
        {/* 요청하신 데이터가 아직 없습니다...
        <br /> 운동일지를 기록하고 공유해주세요. */}
      </S.EmptyComment>
    </S.EmptyWrapper>
  );
}

export default FeedDiaryEmpty;
