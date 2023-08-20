import styled from "styled-components";
import { DANGER, LIGHT_BLACK, SUCCESS, WARNING, WHITE } from "../UI/colors";
import { BORDER_RADIUS, SPACING_SMALL } from "../UI/sizes";

interface IToastStyle {
  type?: "warning" | "success" | "danger";
}

const typeColors = {
  warning: WARNING,
  success: SUCCESS,
  danger: DANGER,
};

export const ToastContainer = styled.div<IToastStyle>`
  width: 550px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: ${SPACING_SMALL};
  background-color: ${({ type }) => typeColors[type || "warning"]};
  border-radius: ${BORDER_RADIUS};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 1;
  padding: 0 ${SPACING_SMALL};
`;

export const Title = styled.h3<IToastStyle>`
  margin: 0 0 4px;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ type }) => (type === "danger" ? WHITE : LIGHT_BLACK)};
`;

export const Message = styled.p<IToastStyle>`
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ type }) => (type === "danger" ? WHITE : LIGHT_BLACK)};
`;

export const CloseButton = styled.button<IToastStyle>`
  display: flex;
  align-items: start;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 16px;

  path {
    fill: ${({ type }) => (type === "danger" ? WHITE : LIGHT_BLACK)};
  }
`;
