export interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  title?: string;
  width?: string | number;
  closeOnOverlayClick?: boolean;
  initiallyOpenIds?: string[];
  onToggle?: (id: string, isOpen: boolean) => void;
}

