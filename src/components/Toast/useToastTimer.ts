import { useEffect } from "react";

export const useToastTimer = (duration: number, onClose: () => void) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);
};
