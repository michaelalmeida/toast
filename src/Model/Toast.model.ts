export type ToastType = "warning" | "success" | "danger";

export interface IToast {
  type?: ToastType;
  title?: string;
  message: string;
}

export interface AddToastProps extends IToast {
  timer?: number;
}
