import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/internal/test";
import { IconButton } from "./IconButton";
import { Icon } from "../icon/Icon";
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
            icon: <Icon icon={<FaChrome />} />,
          }}
        />
        <Story
          args={{
            label: "Facebook",
            icon: <Icon icon={<FaFacebook />} />,
          }}
        />
        <Story
          args={{
            label: "Instagram",
            icon: <Icon icon={<FaInstagram />} />,
          }}
        />
        <Story
          args={{
            label: "Twitter",
            icon: <Icon icon={<FaTwitter />} />,
          }}
        />
      </div>
    ),
  ],
};

export const OnlyIconButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story
          args={{
            label: "Chrome",
            icon: <Icon icon={<FaChrome />} />,
            onlyIcon: true,
          }}
        />
        <Story
          args={{
            label: "Facebook",
            icon: <Icon icon={<FaFacebook />} />,
            onlyIcon: true,
          }}
        />
        <Story
          args={{
            label: "Instagram",
            icon: <Icon icon={<FaInstagram />} />,
            onlyIcon: true,
          }}
        />
        <Story
          args={{
            label: "Twitter",
            icon: <Icon icon={<FaTwitter />} />,
            onlyIcon: true,
          }}
        />
      </div>
    ),
  ],
};

export const ColorIconButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story
          args={{
            label: "Chrome",
            icon: <Icon icon={<FaChrome />} className="text-red-500" />,
            onlyIcon: true,
          }}
        />
        <Story
          args={{
            label: "Facebook",
            icon: <Icon icon={<FaFacebook />} className="text-blue-500" />,
            onlyIcon: true,
          }}
        />
        <Story
          args={{
            label: "Instagram",
            icon: <Icon icon={<FaInstagram />} className="text-pink-500" />,
            onlyIcon: true,
          }}
        />
        <Story
          args={{
            label: "Twitter",
            icon: <Icon icon={<FaTwitter />} className="text-blue-500" />,
            onlyIcon: true,
          }}
        />
      </div>
    ),
  ],
};
