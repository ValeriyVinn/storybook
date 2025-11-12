import React, { useState } from "react";
import MenuList from "./MenuList";
import type { MenuItem } from "./types";
import styles from "./SidebarMenu.module.css";

interface SidebarMenuProps {
  items: MenuItem[];
  onClose: () => void;
  isOpen: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  onClose,
  isOpen,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleItemClick = (item: MenuItem) => {
    console.log("Clicked:", item);
    if (!item.children) onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={onClose}
      ></div>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>

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
