import React, { useState } from "react";
import styles from "./SidebarMenu.module.css";

export interface MenuItem {
  label: string;
  children?: MenuItem[];
  onClick?: () => void;
}

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose, items }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleSubmenu = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const renderMenu = (menuItems: MenuItem[], level = 0) => (
    <ul className={styles.menuLevel}>
      {menuItems.map((item, index) => (
        <li key={index} className={styles.menuItem}>
          <div
            className={`${styles.menuLabel} ${item.children ? styles.hasChildren : ""}`}
            onClick={() => {
              if (item.children) toggleSubmenu(index + level * 100);
              else if (item.onClick) item.onClick();
            }}
          >
            {item.label}
            {item.children && (
              <span className={styles.arrow}>
                {openIndexes.includes(index + level * 100) ? "▲" : "▼"}
              </span>
            )}
          </div>
          {item.children && openIndexes.includes(index + level * 100) && (
            <div className={styles.submenu}>
              {renderMenu(item.children, level + 1)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={onClose}
      />
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h3>Menu</h3>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <nav className={styles.menu}>{renderMenu(items)}</nav>
      </aside>
    </>
  );
};

export default SidebarMenu;
