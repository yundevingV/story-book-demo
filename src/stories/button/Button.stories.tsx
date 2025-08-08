import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "버튼 라벨을 설정할 수 있습니다.",
    },
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
type Story = StoryObj<typeof Button>;

export const Example: Story = {
  args: {
    label: "Button",
  },
};

export const VariantButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story args={{ label: "button", variant: "main", state: "default" }} />
        <Story
          args={{ label: "button", variant: "warning", state: "default" }}
        />
        <Story args={{ label: "button", variant: "error", state: "default" }} />
      </div>
    ),
  ],
};

export const StateButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story args={{ label: "button", variant: "main", state: "default" }} />
        <Story args={{ label: "button", variant: "main", state: "loading" }} />
        <Story args={{ label: "button", variant: "main", state: "success" }} />
        <Story args={{ label: "button", variant: "main", state: "error" }} />
      </div>
    ),
  ],
};

export const SizeButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story args={{ label: "button", variant: "main", size: "small" }} />
        <Story args={{ label: "button", variant: "main", size: "medium" }} />
        <Story args={{ label: "button", variant: "main", size: "large" }} />
      </div>
    ),
  ],
};
