import React, { useState, useEffect } from "react";
import MenuList from "./MenuList";
import type { MenuItem } from "./types";
import styles from "./SidebarMenu.module.css";

interface SidebarMenuProps {
  items: MenuItem[];
  onClose: () => void;
  isOpen: boolean;
  showCloseButton?: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  onClose,
  isOpen,
  showCloseButton = true,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);

      setTimeout(() => setAnimating(true), 10);
    } else {
      setAnimating(false);
    }
  }, [isOpen]);

  const handleToggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleItemClick = () => {};

  const handleTransitionEnd = () => {
    if (!isOpen) setVisible(false);
  };

  return (
    <>
      {visible && (
        <div
          className={`${styles.overlay} ${animating ? styles.show : styles.hide}`}
          onClick={onClose}
        ></div>
      )}

      {visible && (
        <aside
          className={`${styles.sidebar} ${animating ? styles.open : styles.closed}`}
          onTransitionEnd={handleTransitionEnd}
        >
          {showCloseButton && (
            <button className={styles.closeBtn} onClick={onClose}>
              ✖
            </button>
          )}

          <div className={styles.menuContainer}>
            <MenuList
              items={items}
              openIds={openIds}
              onToggle={handleToggle}
              onItemClick={handleItemClick}
            />
          </div>
        </aside>
      )}
    </>
  );
};

export default SidebarMenu;
