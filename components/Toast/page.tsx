import React from "react";
interface ToastType {
  message: string;
  container: string;
}
const Toast = ({ message, container }: ToastType) => {
  return (
    <div
      className={`px-3 py-2 ${container} text-black text-sm font-semibold rounded-lg`}
    >
      <h2>{message}</h2>
    </div>
  );
};

export default Toast;
