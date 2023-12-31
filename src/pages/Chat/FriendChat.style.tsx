import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const Container = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 25px;
`;

export const MessageWrapper = styled.div`
  display: flex; /* flex를 사용하여 내부 요소들을 가로로 배치 */
  flex-direction: row; /* 요소들을 오른쪽에서 왼쪽으로 배치 */
  align-items: flex-start; /* 상단에 정렬 */
`;

export const ProfileImgWrapper = styled.div`
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 10px;
  background-color: ${COLOR.Gray1};
  margin-right: 10px; /* 이미지와 메시지 사이의 간격 조정 */
`;

export const MessageInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  margin-bottom: 5px;
`;

export const Message = styled.div`
  position: relative;
  max-width: 300px;
  border-radius: 10px;
  background-color: ${COLOR.Gray3};
  padding: 10px;
  color: ${COLOR.White};
  font-size: ${FONT.S};
  word-wrap: break-word;

  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${COLOR.Gray3};
    left: 0;
    top: 0;
    transform: rotate(270deg) skewY(-20deg);
  }
`;

export const IsRead = styled.span`
  position: absolute;
  top: 110%;
  left: 0;
  font-size: ${FONT.XS};
  color: ${COLOR.Purple2};
`;

export const CreatedAt = styled.span`
  position: absolute;
  top: 0;
  right: -44px;
  top: 77%;
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
`;
