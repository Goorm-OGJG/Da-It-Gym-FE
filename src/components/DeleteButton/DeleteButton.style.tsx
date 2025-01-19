import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${COLOR.Shadow};
  z-index: 100;
`;

export const Wrapper = styled.div`
  background-color: ${COLOR.White};
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-size: ${FONT.L};
  font-weight: ${FONT.Bold};
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  border-radius: 10px;
  z-index: 101;
  border: 2px solid ${COLOR.Primary};

  opacity: 0;
  animation: fadeIn 0.5s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 20px;
`;

export const MessageBox = styled.span`
  font-size: ${FONT.M};
`;

export const IconWrapper = styled.span`
  cursor: pointer;
`;
