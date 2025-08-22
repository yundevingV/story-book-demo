import type { Meta, StoryObj } from "@storybook/nextjs";
import Link from "../../components/Link";

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="/" label="Link" size="md" />
    </div>
  ),
};

export const LinkList: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="/" label="Link" size="md" />
      <Link href="/" label="Link" size="sm" />
      <Link href="/" label="Link" size="lg" />
      <Link href="/" label="Disabled Link" size="lg" disabled />
    </div>
  ),
};
