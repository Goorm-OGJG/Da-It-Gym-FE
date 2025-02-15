import styled from "styled-components";
import * as COLOR from "../../../constants/color";
export const TopRef = styled.div`
  opacity: 1;
  background-color: red;
  height: 50px;
`;
export const BodyWrapper = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  width: 100%;
  /* max-height: 830px; */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  /* flex-flow: row wrap;
  gap: 7.5px; */
  /* &::-webkit-scrollbar { */
  /* display: none; */
  /* } */
`;
export const BodyEmptyWrapper = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  width: 100%;
  /* max-height: 830px; */
  padding: 120px 30px 100px 30px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  /* flex-flow: row wrap;
  gap: 7.5px; */
  /* &::-webkit-scrollbar { */
  /* display: none; */
  /* } */
`;
export const BodyBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;
export const FeedElementBox = styled.div`
  max-height: 200px;
  padding: 2px;
  background-color: ${COLOR.Gray1};
  @media (max-width: 600px) {
    aspect-ratio: 1;
  }
  cursor: pointer;
`;
export const Observer = styled.div`
  width: 100%;
  height: 10px;
  opacity: 0.8;
  /* background-color: ${COLOR.Green3}; */
`;
export const UpIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &:hover {
    color: ${COLOR.White};
  }
`;

export const MoveToTopButton = styled.div`
  display: flex;
  position: fixed;
  width: 30px;
  height: 30px;
  background-color: ${COLOR.Gray0};
  border-radius: 50%;
  z-index: 90;
  bottom: 90px;
  right: 60px;
  &:hover {
    background-color: ${COLOR.White};
  }
  cursor: pointer;
`;
