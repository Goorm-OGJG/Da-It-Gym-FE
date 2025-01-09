import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;
export const EmptyImgBox = styled.div`
  width: 200px;
  height: 150px;
`;
export const EmptyImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const EmptyComment = styled.div`
  white-space: nowrap;
  margin-top: 12px;
  align-content: center;
  font-size: ${FONT.XS};
  /* font-size: 0.7rem; */
  color: ${COLOR.Gray3};
  line-height: 30px;
`;
