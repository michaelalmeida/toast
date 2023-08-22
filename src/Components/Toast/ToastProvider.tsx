import React, { createContext, useContext, useState } from "react";
import { AddToastProps, IToast } from "../../Model/Toast.model";
import { Toasts } from "./Toasts";
import { v4 as uuidv4 } from "uuid";

interface ToastProps extends IToast {
  id: string;
}

interface ToastContextProps {
  toasts: ToastProps[];
  addToast: (toast: AddToastProps) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextProps | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const DEFAULT_TOAST_TIMER = 6000;
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const addToast = ({ type, title, message, timer }: AddToastProps) => {
    const toastTimer = timer || DEFAULT_TOAST_TIMER;
    const id = uuidv4();
    const newTost = { type, title, message, id };

    setToasts((prevToasts) => [newTost, ...prevToasts]);

    setTimeout(() => {
      removeToast(id);
    }, toastTimer);
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <Toasts />
    </ToastContext.Provider>
  );
};
