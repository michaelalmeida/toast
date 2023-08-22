import styled from "styled-components";
import { DANGER, LIGHT_BLACK, SUCCESS, WARNING, WHITE } from "../../UI/colors";
import {
  BORDER_RADIUS,
  SPACING_SMALL,
  SPACING_BIG,
  TOAST_DEFAULT_SIZE,
  DESKTOP_SIZE,
  FULL_SIZE,
  SPACING_LARGE,
} from "../../UI/sizes";

interface IToastStyle {
  $notificationType?: "warning" | "success" | "danger";
}

const typeColors = {
  warning: WARNING,
  success: SUCCESS,
  danger: DANGER,
};

export const ToastWrapper = styled.div`
  position: absolute;
  bottom: ${SPACING_BIG}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;


  @media screen and (max-width: ${DESKTOP_SIZE}px) {
    padding: ${SPACING_LARGE}px;
    bottom: 0;
  }
}
`;

export const ToastContainer = styled.div<IToastStyle>`
  margin-bottom: ${SPACING_BIG}px;
  width: ${TOAST_DEFAULT_SIZE}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: ${SPACING_SMALL}px;
  background-color: ${({ $notificationType }) =>
    typeColors[$notificationType || "warning"]};
  border-radius: ${BORDER_RADIUS}px;
  position: relative;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${DESKTOP_SIZE}px) {
    width: ${FULL_SIZE}%;
  }
`;

export const IconContainer = styled.div`
  padding-top: 5px;
  display: flex;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 1;
  padding: 0 ${SPACING_SMALL}px;
  max-width: 100%;
  overflow: hidden;
`;

export const Title = styled.h3<IToastStyle>`
  max-width: ${FULL_SIZE}%;
  margin: 0 0 4px;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ $notificationType }) =>
    $notificationType === "danger" ? WHITE : LIGHT_BLACK};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Message = styled.p<IToastStyle>`
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ $notificationType }) =>
    $notificationType === "danger" ? WHITE : LIGHT_BLACK};
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
    fill: ${({ $notificationType }) =>
      $notificationType === "danger" ? WHITE : LIGHT_BLACK};
  }
`;
