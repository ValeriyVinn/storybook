import React from "react";
import styles from "./SidebarMenu.module.css";

interface Props { title?: string; onClose: () => void; }

const SidebarHeader: React.FC<Props> = ({ title = "Menu", onClose }) => (
  <div className={styles.header}>
    <h3>{title}</h3>
    <button aria-label="Close menu" className={styles.closeBtn} onClick={onClose}>✕</button>
  </div>
);

export default React.memo(SidebarHeader);
