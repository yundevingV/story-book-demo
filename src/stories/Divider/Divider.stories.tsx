import type { Meta, StoryObj } from "@storybook/nextjs";

import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Example: Story = {
  args: {
    variant: "default",
    className: " w-96",
  },
};

export const DividerList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-96">
        <Story args={{ variant: "default" }} className="h-4" />
        <Story args={{ variant: "primary" }} className="h-4" />
        <Story args={{ variant: "secondary" }} className="h-4" />
        <Story args={{ variant: "accent" }} className="h-4" />
        <Story args={{ variant: "info" }} className="h-4" />
        <Story args={{ variant: "success" }} className="h-4" />
        <Story args={{ variant: "warning" }} className="h-4" />
        <Story args={{ variant: "error" }} className="h-4" />
      </div>
    ),
  ],
};
