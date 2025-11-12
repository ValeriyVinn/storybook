import React from "react";
import styles from "./Toast.module.css";
import type { ToastProps } from "./types";
import { useToastTimer } from "./useToastTimer";

const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 4000,
  onClose,
  showClose = true,
}) => {
  useToastTimer(duration, onClose);

  return (
    <div
      className={`${styles.toast} ${styles[type]}`}
      style={{ "--fade-delay": `${(duration - 1200) / 1000}s` } as React.CSSProperties}
    >
      <span>{message}</span>
      {showClose && (
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
};

export default Toast;
