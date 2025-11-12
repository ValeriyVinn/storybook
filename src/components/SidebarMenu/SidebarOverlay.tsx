// SidebarOverlay.tsx
import React from "react";
import styles from "./SidebarMenu.module.css";

interface Props { isOpen: boolean; onClick: () => void; closeOnOverlay?: boolean; }

const SidebarOverlay: React.FC<Props> = ({ isOpen, onClick, closeOnOverlay = true }) => (
  <div
    className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
    onClick={() => { if (closeOnOverlay) onClick(); }}
    aria-hidden={!isOpen}
  />
);

export default React.memo(SidebarOverlay);
