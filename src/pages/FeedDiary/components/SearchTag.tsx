import { useState } from "react";
import HashTagButton from "../../../components/HashtagButton/HashtagButton";
import * as S from "./SearchTag.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { partListState, splitSearchState } from "../../../recoil/feedDiaryState";
const division = [
  { id: "d1", label: "무분할", type: "division" },
  { id: "d2", label: "2분할", type: "division" },
  { id: "d3", label: "3분할", type: "division" },
  { id: "d4", label: "4분할", type: "division" },
  { id: "d5", label: "5분할", type: "division" },
  { id: "d6", label: "6분할+", type: "division" },
];
const body = [
  { id: "b1", label: "가슴", type: "division" },
  { id: "b2", label: "등", type: "division" },
  { id: "b3", label: "하체", type: "division" },
  { id: "b4", label: "어깨", type: "division" },
  { id: "b5", label: "이두", type: "division" },
  { id: "b6", label: "삼두", type: "division" },
  { id: "b7", label: "복근", type: "division" },
  { id: "b8", label: "유산소", type: "division" },
];
function SearchTag() {
  const [ActiveButtonId, setActiveButtonId] = useState("d1");
  const setSplit = useSetRecoilState(splitSearchState);
  const [PartList, setPartList] = useRecoilState<Array<string>>(partListState);
  const handleDivisionIsActive = (id: string, label: string) => {
    // console.log(id, label);
    setActiveButtonId(id);
    setSplit(label);
  };

  const handleBodyIsActive = (label: string) => {
    if (PartList.includes(label)) {
      setPartList(PartList.filter((ele) => ele !== label));
    } else {
      setPartList([...PartList, label]);
    }
  };
  // console.log(PartList);
  return (
    <S.TagWrapper>
      <S.TagDivistionBox>
        {division.map((data) => (
          <>
            <HashTagButton
              id={data.id}
              label={data.label}
              type="division"
              onClick={() => handleDivisionIsActive(data.id, data.label)}
              isActive={ActiveButtonId === data.id}
            />
          </>
        ))}
      </S.TagDivistionBox>
      <S.TagDivistionBox>
        {body.map((data) => (
          <>
            <HashTagButton
              id={data.id}
              label={data.label}
              type="body"
              onClick={() => {
                handleBodyIsActive(data.label);
              }}
              isActive={PartList.includes(data.label)}
              //PartList 배열에 label있으면 isActive값 true 로 전달
            />
          </>
        ))}
      </S.TagDivistionBox>
    </S.TagWrapper>
  );
}

export default SearchTag;
