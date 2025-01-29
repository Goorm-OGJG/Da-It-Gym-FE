import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

export const ExerciseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 15px;
  font-weight: ${FONT.Regular};
  font-size: ${FONT.S};
  align-items: center;
`;

export const ExerciseHeaderWrapper = styled(ExerciseWrapper)`
  padding-top: 20px;
`;
export const Title = styled.span`
  flex: 1;
  width: 60px;
`;

export const ExerciseLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 210px;
`;

export const ExerciseRight = styled.label`
  width: 60px;
  text-align: center;
`;

export const Record = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 60px;
`;

export const NumberInput = styled.input`
  width: 40px;
  border: none;
  font-size: ${FONT.S};
  padding: 5px 0;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: 2px solid ${COLOR.Primary};
  }
`;

export const Checkbox = styled.div`
  flex: 1;
  text-align: center;
  width: 100%;
  height: 25px;
  border-radius: 5px;
  background-color: ${COLOR.Gray2};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckboxHide = styled.input`
  display: none;

  &:checked + div {
    background-color: ${COLOR.Primary};
  }
`;
