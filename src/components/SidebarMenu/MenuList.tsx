import React from "react";
import MenuItem from "./MenuItem";
import type { MenuItem as MenuItemType } from "./types";

export interface MenuListProps {
  items: MenuItemType[];
  openIds: string[];
  onToggle: (id: string) => void;
  onItemClick: (item: MenuItemType) => void;
}

const MenuList: React.FC<MenuListProps> = ({ items, openIds, onToggle, onItemClick }) => {
  return (
    <ul>
      {items.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          isOpen={openIds.includes(item.id)}
          onToggle={onToggle}
          onClick={onItemClick}
        />
      ))}
    </ul>
  );
};

export default MenuList;


