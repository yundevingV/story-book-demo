import type { Meta, StoryObj } from "@storybook/nextjs";

import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Example: Story = {
  args: {
    children: "Label",
  },
};
