import styled from "styled-components";
import * as COLOR from "../../constants/color";

interface ButtonProps {
  labelWidth: number;
  isActive: boolean;
  type: "division" | "body";
}

const getBackgroundColor = (props: ButtonProps) => {
  const { isActive, type } = props;
  switch (type) {
    case "division":
      return isActive ? COLOR.Purple2 : COLOR.Purple1;
    case "body":
      return isActive ? COLOR.Green2 : COLOR.Green1;
  }
};

const getTextColor = (props: ButtonProps) => {
  return props.isActive ? "#ffffff" : "#000000";
};

export const StyledButton = styled.button<ButtonProps>`
  width: ${({ labelWidth }) => labelWidth + 30}px;
  height: 24px;
  border-radius: 10px;
  background-color: ${getBackgroundColor};
  color: ${getTextColor};
  outline: none;
  border: none;
  cursor: pointer;
`;
