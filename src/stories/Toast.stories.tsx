import type { Meta, StoryObj } from "@storybook/react";
import  Toast  from "../components/Toast/Toast";

const meta = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "info"],
    },
    duration: {
      control: { type: "range", min: 1000, max: 8000, step: 500 },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const noop = () => {}; 

export const Success: Story = {
  args: {
    message: "Operation completed successfully!",
    type: "success",
    duration: 4000,
    onClose: noop,
  },
};

export const Error: Story = {
  args: {
    message: "Something went wrong!",
    type: "error",
    duration: 5000,
    onClose: noop,
  },
};

export const Info: Story = {
  args: {
    message: "This is an informational toast.",
    type: "info",
    duration: 3000,
    onClose: noop,
  },
};

export const LongDuration: Story = {
  args: {
    message: "This message stays longer (7 seconds)",
    type: "success",
    duration: 7000,
    onClose: noop,
  },
};
