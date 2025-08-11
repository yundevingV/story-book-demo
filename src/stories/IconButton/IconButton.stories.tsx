import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/internal/test";
import { IconButton } from "./IconButton";
import { Icon } from "../icon/Icon";
import {
  FaChrome,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaGoogle,
  FaXTwitter,
  FaApple,
  FaAmazon,
  FaMicrosoft,
  FaLinkedin,
} from "react-icons/fa6";
import { SiKakaotalk, SiLine, SiSlack } from "react-icons/si";

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

export const LoginIconButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="grid  gap-4">
        <Story
          args={{
            label: "Login with GitHub",
            icon: <Icon icon={<FaGithub />} className="text-white" />,
            className: "bg-black text-white border-black text-sm",
          }}
        />
        <Story
          args={{
            label: "Login with Google",
            icon: <Icon icon={<FaGoogle />} className="text-red-500" />,
            className: "bg-white text-black border-[#e5e5e5]",
          }}
        />
        <Story
          args={{
            label: "Login with Facebook",
            icon: <Icon icon={<FaFacebook />} className="text-blue-600" />,
            className: "bg-[#1A77F2] text-white border-[#005fd8]",
          }}
        />
        <Story
          args={{
            label: "Login with X (Twitter)",
            icon: <Icon icon={<FaXTwitter />} className="text-black" />,
            className: "bg-black text-white border-black",
          }}
        />
        <Story
          args={{
            label: "카카오 로그인",
            icon: <Icon icon={<SiKakaotalk />} className="text-yellow-400" />,
            className: "bg-[#FEE502] text-[#181600] border-[#f1d800]",
          }}
        />
        <Story
          args={{
            label: "Login with Apple",
            icon: <Icon icon={<FaApple />} className="text-gray-800" />,
            className: "bg-black text-white border-black",
          }}
        />
        <Story
          args={{
            label: "Login with Amazon",
            icon: <Icon icon={<FaAmazon />} className="text-orange-500" />,
            className: "bg-[#FF9900] text-black border-[#e17d00]",
          }}
        />
        <Story
          args={{
            label: "Login with Microsoft",
            icon: <Icon icon={<FaMicrosoft />} className="text-blue-600" />,
            className: "bg-[#2F2F2F] text-white border-black",
          }}
        />
        <Story
          args={{
            label: "Login with Line",
            icon: <Icon icon={<SiLine />} className="text-green-500" />,
            className: "bg-[#03C755] text-white border-[#00b544]",
          }}
        />
        <Story
          args={{
            label: "Login with Slack",
            icon: <Icon icon={<SiSlack />} className="text-purple-500" />,
            className: "bg-[#622069] text-white border-[#591660]",
          }}
        />
        <Story
          args={{
            label: "Login with LinkedIn",
            icon: <Icon icon={<FaLinkedin />} className="text-blue-700" />,
            className: "bg-[#0967C2] text-white border-[#0059b3]",
          }}
        />
      </div>
    ),
  ],
};
