import styled from "styled-components";
import * as FONT from "../../../../constants/font";
import * as COLOR from "../../../../constants/color";

export const Wrapper = styled.div`
  flex: 1;
  margin: 30px;
  margin-top: 130px;
  margin-bottom: 130px;
  box-shadow: 0 4px 4px ${COLOR.Shadow};
  border-radius: 10px;
  padding: 30px 20px;
`;

export const Congratulation = styled.div`
  font-size: ${FONT.L};
  font-weight: ${FONT.Bold};
  text-align: center;
  padding-bottom: 10px;
`;

export const TimeRecord = styled.div`
  display: flex;
  gap: 5px;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  padding: 20px 5px;
`;

export const Exercises = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonBox = styled.div`
  padding-top: 30px;
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`;

export const Icon = styled.div`
  float: right;
  cursor: pointer;
`;
