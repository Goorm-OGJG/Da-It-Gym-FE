import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(60px);
  user-select: none;
  height: 80%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Title = styled.div`
  text-align: start;
  /* border: 1px solid red; */
  width: 100%;
  font-size: ${FONT.L};
  padding: 20px;
  font-weight: ${FONT.Bold};
  cursor: pointer;
`;

export const ChatContainer = styled.div`
  width: 100%;
  height: 72vh;
  padding: 0px 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: -50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
  padding: 5px 10px;
  font-size: ${FONT.M};
`;

export const ButtonWrapper = styled.div`
  white-space: nowrap;
  /* border: 1px solid red; */
  height: 40px;
  transform: translateY(2px);
`;

export const ChatInput = styled.textarea`
  width: 100%;
  outline: none;
  border: 1px solid ${COLOR.Gray1};
  padding: 8px 20px;
  font-size: ${FONT.M};
  &:focus {
    border: 1px solid ${COLOR.Primary};
  }
  border-radius: 5px;
  resize: none;
  height: 40px;
`;
