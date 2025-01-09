import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const SideWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 300px;
  background-color: ${COLOR.White};
  color: ${COLOR.Primary};
  top: 60px;
  right: 515px;
  transition: all 1s ease-in-out;
  border-radius: 1px solid ${COLOR.Gray0};
  box-shadow: 4px 4px 12px rgba(32, 32, 32, 0.1);
  z-index: 90;
`;
export const SideMenuBox = styled.button`
  display: flex;
  font-size: 10px;
  align-items: center;
  width: 100%;
  background-color: ${COLOR.White};
  border: none;
  padding: 16px 24px 16px 24px;
  cursor: pointer;

  &:hover{
    background-color: ${COLOR.Gray0};
    transform: scale(98%);
    transition: 0.2s;
  }

  &:active{
    background-color: ${COLOR.White};
  }
`;
export const SearchIcon = styled.div`
  margin-right: 10px;
`;
export const SideMenuTitle = styled.div`
  font-size: ${FONT.S};
  color: ${COLOR.Gray4};
`;
export const Line = styled.div`
  width: 90%;
  border-top: 1px solid ${COLOR.Gray0};
`;


