import type { Meta, StoryObj } from "@storybook/nextjs";

import React from "react";

import Skeleton from "../../components/Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Example: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};
