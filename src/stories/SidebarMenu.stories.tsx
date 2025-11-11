import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import type { MenuItem } from "../components/SidebarMenu/SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

const Template = (args: React.ComponentProps<typeof SidebarMenu>) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "8px 12px",
          zIndex: 2000,
        }}
        onClick={() => setOpen(true)}
      >
        Open Menu
      </button>
      <SidebarMenu {...args} isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

const items1: MenuItem[] = [
  { label: "Home" },
  { label: "About" },
  { label: "Contact" },
];

const items2: MenuItem[] = [
  {
    label: "Dashboard",
    children: [
      { label: "Overview" },
      {
        label: "Settings",
        children: [
          { label: "Profile" },
          { label: "Security" },
        ],
      },
    ],
  },
  { label: "Help" },
];

export const OneLevel: Story = {
  render: (args) => <Template {...args} items={items1} />,
};

export const TwoLevelNested: Story = {
  render: (args) => <Template {...args} items={items2} />,
};
