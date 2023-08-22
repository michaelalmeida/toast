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
    <ToastContainer $notificationType={type} role="dialog" tabIndex={0}>
      <IconContainer>{typeIcons[type]}</IconContainer>
      <TextContainer>
        <Title $notificationType={type} tabIndex={0}>
          {title ? title : titleDefaultText[type]}
        </Title>
        <Message $notificationType={type} tabIndex={0}>
          {message}
        </Message>
      </TextContainer>
      <CloseButton
        $notificationType={type}
        onClick={onClose}
        type="button"
        aria-label={`Close ${type} toast`}
      >
        <CloseSvg tabIndex={0} />
      </CloseButton>
    </ToastContainer>
  );
};
