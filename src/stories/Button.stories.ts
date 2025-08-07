import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["main", "warning", "error"],
    },
    state: {
      control: { type: "radio" },
      options: ["default", "loading", "success", "error"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 버튼들
export const Primary: Story = {
  args: {
    label: "Button",
    variant: "main",
    state: "default",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    variant: "warning",
    state: "default",
  },
};

export const Error: Story = {
  args: {
    label: "Error",
    variant: "error",
    state: "default",
  },
};
