import { IToast } from "../../Model/Toast.model";

import {
  CloseButton,
  IconContainer,
  Message,
  TextContainer,
  Title,
  ToastContainer,
} from "./Toast.style";
import { ReactComponent as SuccessSvg } from "../../Assets/Icons/success.svg";
import { ReactComponent as DangerSvg } from "../../Assets/Icons/danger.svg";
import { ReactComponent as WarningSvg } from "../../Assets/Icons/warning.svg";
import { ReactComponent as CloseSvg } from "../../Assets/Icons/close.svg";

interface ToastProps extends IToast {
  onClose: () => void;
}

export const Toast = ({
  type = "warning",
  title,
  message,
  onClose,
}: ToastProps) => {
  const typeIcons = {
    warning: <WarningSvg />,
    success: <SuccessSvg />,
    danger: <DangerSvg />,
  };

  const titleDefaultText = {
    warning: "Warning",
    success: "Success",
    danger: "Danger",
  };

  return (
    <ToastContainer type={type}>
      <IconContainer>{typeIcons[type]}</IconContainer>
      <TextContainer>
        <Title type={type}>{title ? title : titleDefaultText[type]}</Title>
        <Message type={type}>{message}</Message>
      </TextContainer>
      <CloseButton type={type} onClick={onClose}>
        <CloseSvg />
      </CloseButton>
    </ToastContainer>
  );
};
