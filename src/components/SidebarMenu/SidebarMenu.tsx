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
    if (!item.children) onClose();
  };

  return (
    <>
      {/* Оверлей з анімацією */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : styles.hide}`}
        onClick={onClose}
      ></div>

      {/* Сайдбар з анімацією */}
      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
      >
        <button className={styles.closeBtn} onClick={onClose}>✖</button>

        <div className={styles.menuContainer}>
          <MenuList
            items={items}
            openIds={openIds}
            onToggle={handleToggle}
            onItemClick={handleItemClick}
          />
        </div>
      </aside>
    </>
  );
};

export default SidebarMenu;
