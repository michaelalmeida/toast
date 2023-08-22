import { useToast } from "./ToastProvider";
import { Toast } from ".";
import { ToastWrapper } from "./Toast.style";

export const Toasts = () => {
  const { toasts, removeToast } = useToast();

  return (
    <ToastWrapper>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          title={toast.title}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </ToastWrapper>
  );
};
