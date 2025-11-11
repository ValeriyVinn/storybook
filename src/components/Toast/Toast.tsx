import { useEffect } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number; 
  onClose: () => void;
  showClose?: boolean;
}

export const Toast = ({
  message,
  type = "info",
  duration = 4000,
  onClose,
  showClose = true,
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`${styles.toast} ${styles[type]}`}
      style={
        {
          "--fade-delay": `${(duration - 1200) / 1000}s`,
        } as React.CSSProperties
      }
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

