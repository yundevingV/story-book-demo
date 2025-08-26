import type { Meta, StoryObj } from "@storybook/nextjs";

import React from "react";

import Badge from "../../components/Badge";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Example: Story = {
  args: {
    children: "Badge",
  },
};

export const VariantInputList: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <Badge variant="default" size="md">
        Default
      </Badge>
      <Badge variant="primary" size="md">
        Primary
      </Badge>
      <Badge variant="secondary" size="md">
        Secondary
      </Badge>
      <Badge variant="info" size="md">
        Info
      </Badge>
      <Badge variant="success" size="md">
        Success
      </Badge>
      <Badge variant="warning" size="md">
        Warning
      </Badge>
      <Badge variant="error" size="md">
        Error
      </Badge>
    </div>
  ),
};

export const SizeInputList: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <Badge variant="primary" size="sm">
        Primary
      </Badge>
      <Badge variant="primary" size="md">
        Primary
      </Badge>
      <Badge variant="primary" size="lg">
        Primary
      </Badge>
    </div>
  ),
};
