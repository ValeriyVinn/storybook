import React, { useState } from "react";
import MenuList from "./MenuList";
import type { MenuItem } from "./types";
import styles from "./SidebarMenu.module.css";

interface SidebarMenuProps {
  items: MenuItem[];
  onClose: () => void;
  isOpen: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ items, onClose, isOpen }) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleItemClick = (item: MenuItem) => {
    console.log("Clicked:", item);
    onClose();
  };

  return (
    <>
      {/* Оверлей */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={onClose}
      />

      {/* Бічне меню */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h3>Menu</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            ✖
          </button>
        </div>

        <nav className={styles.menu}>
          <MenuList
            items={items}
            openIds={openIds}
            onToggle={handleToggle}
            onItemClick={handleItemClick}
          />
        </nav>
      </aside>
    </>
  );
};

export default SidebarMenu;
