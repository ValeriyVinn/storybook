import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import type { MenuItem } from "../components/SidebarMenu/types";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

const Template = (args: React.ComponentProps<typeof SidebarMenu>) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "8px 12px",
          zIndex: 2000,
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "✕" : "Open Menu"}
      </button>

      <SidebarMenu
        {...args}
        isOpen={open}
        onClose={() => setOpen(false)}
        showCloseButton={false}
      />
    </>
  );
};

const items1: MenuItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const items2: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    children: [
      { id: "overview", label: "Overview" },
      {
        id: "settings",
        label: "Settings",
        children: [
          { id: "profile", label: "Profile" },
          { id: "security", label: "Security" },
        ],
      },
    ],
  },
  { id: "help", label: "Help" },
];

export const OneLevel: Story = {
  render: (args) => <Template {...args} items={items1} />,
};

export const TwoLevelNested: Story = {
  render: (args) => <Template {...args} items={items2} />,
};
