import Button from "../../components/Button";
import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { fn } from "storybook/test";

const meta: Meta<typeof Button> = {
  title: "Button",
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
      options: [
        "default",
        "primary",
        "secondary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
      ],
      description: "버튼 타입을 설정할 수 있습니다.",
    },
    isLoading: {
      control: { type: "radio" },
      options: [true, false],
      description: "버튼 상태를 설정할 수 있습니다.",
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "버튼 크기를 설정할 수 있습니다.",
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
      <div className="grid grid-cols-3 gap-4">
        <Story args={{ label: "default", variant: "default" }} />
        <Story args={{ label: "primary", variant: "primary" }} />
        <Story args={{ label: "secondary", variant: "secondary" }} />
        <Story args={{ label: "accent", variant: "accent" }} />
        <Story args={{ label: "info", variant: "info" }} />
        <Story args={{ label: "success", variant: "success" }} />
        <Story args={{ label: "warning", variant: "warning" }} />
        <Story args={{ label: "error", variant: "error" }} />
        <Story args={{ label: "ghost", variant: "ghost" }} />
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
        <Story args={{ label: "md", size: "md" }} />
        <Story args={{ label: "sm", size: "sm" }} />
        <Story args={{ label: "lg", size: "lg" }} />
      </div>
    ),
  ],
};

export const LoadingButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story args={{ label: "default", isLoading: true }} />
      </div>
    ),
  ],
};

export const IconButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story args={{ label: "default", leftIcon: <FaDownload /> }} />
        <Story args={{ label: "default", rightIcon: <FaDownload /> }} />
      </div>
    ),
  ],
};
