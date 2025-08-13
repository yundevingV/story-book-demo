import type { Meta, StoryObj } from "@storybook/nextjs";

import { Badge } from "./Badge";

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
    <div className="flex flex-col gap-4 p-4 justify-center items-center">
      <Badge variant="default" size="default">
        Default
      </Badge>
      <Badge variant="primary" size="default">
        Primary
      </Badge>
      <Badge variant="secondary" size="default">
        Secondary
      </Badge>
      <Badge variant="info" size="default">
        Info
      </Badge>
      <Badge variant="success" size="default">
        Success
      </Badge>
      <Badge variant="warning" size="default">
        Warning
      </Badge>
      <Badge variant="error" size="default">
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
    <div className="flex flex-col gap-4 p-4 justify-center items-center">
      <Badge variant="primary" size="sm">
        Primary
      </Badge>
      <Badge variant="primary" size="default">
        Primary
      </Badge>
      <Badge variant="primary" size="lg">
        Primary
      </Badge>
    </div>
  ),
};
