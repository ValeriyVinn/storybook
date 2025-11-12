import React from "react";
import type { MenuItem } from "./types";
import styles from "./MenuList.module.css";

interface MenuListProps {
  items: MenuItem[];
  openIds: string[];
  onToggle: (id: string) => void;
  onItemClick: (item: MenuItem) => void;
}

const MenuList: React.FC<MenuListProps> = ({ items, openIds, onToggle, onItemClick }) => {
  return (
   
    <ul className={styles.menuLevel}>
      {items.map((item) => {
        const hasChildren = !!item.children?.length;
        const isOpen = openIds.includes(item.id);

        return (
          <li key={item.id} className={styles.menuItem}>
            <div
              className={`${styles.menuLabel} ${hasChildren ? styles.hasChildren : ""}`}
              onClick={() => hasChildren ? onToggle(item.id) : onItemClick(item)}
            >
              {item.label}
              {hasChildren && <span className={styles.arrow}>{isOpen ? "▼" : "▶"}</span>}
            </div>

            {hasChildren && isOpen && (
              <ul className={`${styles.menuLevel} ${styles.submenu}`}>
                <MenuList
                  items={item.children!}
                  openIds={openIds}
                  onToggle={onToggle}
                  onItemClick={onItemClick}
                />
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
