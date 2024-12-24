import { ReactNode } from "react";

export type ToastProps = {
  id: string;
  title?: string;
  description?: string;
  action?: ReactNode;
  type?: "default" | "success" | "warning" | "error";
  duration?: number;
};

export type Toast = ToastProps;

export type ToasterToast = ToastProps & {
  id: string;
  title?: string;
  description?: string;
  action?: ReactNode;
  type?: "default" | "success" | "warning" | "error";
  duration?: number;
};

export type ToastActionElement = React.ReactElement<{
  altText: string;
  onClick: () => void;
}>;
