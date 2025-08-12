import type { Meta, StoryObj } from "@storybook/nextjs";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Example: Story = {
  args: {
    type: "text",
  },
};

export const VariantInputList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4">
        <Story args={{ variant: "default" }} />
        <Story args={{ variant: "filled" }} />
        <Story args={{ variant: "outline" }} />
      </div>
    ),
  ],
};

export const TypeInputList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 bg-black/80 p-4 w-96">
        <Story
          args={{
            variant: "default",
            placeholder: "example",
            type: "text",
          }}
        />
        <Story
          args={{
            variant: "default",
            placeholder: "example@gmail.com",
            type: "email",
          }}
        />
        <Story
          args={{
            variant: "default",
            placeholder: "********",
            type: "password",
          }}
        />
        <Story
          args={{
            variant: "default",
            placeholder: "lg",
            type: "file",
          }}
        />
      </div>
    ),
  ],
};
