import React from "react";
import styles from "./SidebarMenu.module.css";
import type { MenuItem as MenuItemType } from "./types";

interface MenuItemProps {
  item: MenuItemType;
  isOpen: boolean;
  onToggle: (id: string) => void;
  onClick: (item: MenuItemType) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, isOpen, onToggle, onClick }) => {
  return (
    <li className={styles.item}>
      <button
        className={styles.button}
        onClick={() => (item.children ? onToggle(item.id) : onClick(item))}
      >
        {item.label}
        {item.children && <span>{isOpen ? "▾" : "▸"}</span>}
      </button>
      {item.children && isOpen && (
        <ul className={styles.submenu}>
          {item.children.map((child) => (
            <MenuItem
              key={child.id}
              item={child}
              isOpen={false}
              onToggle={onToggle}
              onClick={onClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;

