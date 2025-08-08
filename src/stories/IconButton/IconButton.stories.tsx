import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/internal/test";
import { FiPlus } from "react-icons/fi";
import { IconButton } from "./IconButton";
import { FaChrome, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const meta: Meta<typeof IconButton> = {
  title: "Example/IconButton",
  component: IconButton,
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
      description: "버튼 타입을 설정할 수 있습니다.",
    },
    state: {
      control: { type: "radio" },
      options: ["default", "loading", "success", "error"],
      description: "버튼 상태를 설정할 수 있습니다.",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "버튼 크기를 설정할 수 있습니다.",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Example: Story = {
  args: {
    label: "button",
    icon: <FiPlus />,
    variant: "main",
    size: "medium",
    state: "default",
  },
};

export const IconButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story
          args={{
            label: "Chrome",
            icon: <FaChrome />,
          }}
        />
        <Story
          args={{
            label: "Facebook",
            icon: <FaFacebook />,
          }}
        />
        <Story
          args={{
            label: "Instagram",
            icon: <FaInstagram />,
          }}
        />
        <Story
          args={{
            label: "Twitter",
            icon: <FaTwitter />,
          }}
        />
      </div>
    ),
  ],
};
