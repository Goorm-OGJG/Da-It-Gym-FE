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
      </S.EmptyComment>
    </S.EmptyWrapper>
  );
}

export default FeedDiaryEmpty;
