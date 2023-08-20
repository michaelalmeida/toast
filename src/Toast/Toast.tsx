import {
  CloseButton,
  IconContainer,
  Message,
  TextContainer,
  Title,
  ToastContainer,
} from "./Toast.style";
import { ReactComponent as SuccessSvg } from "../Assets/Icons/success.svg";
import { ReactComponent as DangerSvg } from "../Assets/Icons/danger.svg";
import { ReactComponent as WarningSvg } from "../Assets/Icons/warning.svg";
import { ReactComponent as CloseSvg } from "../Assets/Icons/close.svg";

interface IToast {
  type?: "warning" | "success" | "danger";
  title?: string;
  message: string;
}

export const Toast = ({ type = "warning", title, message }: IToast) => {
  const typeIcons = {
    warning: <WarningSvg />,
    success: <SuccessSvg />,
    danger: <DangerSvg />,
  };

  return (
    <ToastContainer type={type}>
      <IconContainer>{typeIcons[type]}</IconContainer>
      <TextContainer>
        <Title type={type}>{title}</Title>
        <Message type={type}>{message}</Message>
      </TextContainer>
      <CloseButton type={type}>
        <CloseSvg />
      </CloseButton>
    </ToastContainer>
  );
};
