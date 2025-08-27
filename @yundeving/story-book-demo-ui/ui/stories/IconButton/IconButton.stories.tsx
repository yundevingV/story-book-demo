import { Icon, IconButton } from "../../components";
import { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import {
  FaAmazon,
  FaApple,
  FaChrome,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaMicrosoft,
  FaTwitter,
  FaXTwitter,
} from "react-icons/fa6";
import { SiLine, SiSlack } from "react-icons/si";
import { fn } from "storybook/internal/test";

const meta: Meta<typeof IconButton> = {
  title: "Button",
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
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
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
            "aria-label": "Chrome",
          }}
        />
        <Story
          args={{
            label: "Facebook",
            icon: <Icon icon={<FaFacebook />} />,
            onlyIcon: true,
            "aria-label": "Facebook",
          }}
        />
        <Story
          args={{
            label: "Instagram",
            icon: <Icon icon={<FaInstagram />} />,
            onlyIcon: true,
            "aria-label": "Instagram",
          }}
        />
        <Story
          args={{
            label: "Twitter",
            icon: <Icon icon={<FaTwitter />} />,
            onlyIcon: true,
            "aria-label": "Twitter",
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
            "aria-label": "Chrome",
          }}
        />
        <Story
          args={{
            label: "Facebook",
            icon: <Icon icon={<FaFacebook />} className="text-blue-500" />,
            onlyIcon: true,
            "aria-label": "Facebook",
          }}
        />
        <Story
          args={{
            label: "Instagram",
            icon: <Icon icon={<FaInstagram />} className="text-pink-500" />,
            onlyIcon: true,
            "aria-label": "Instagram",
          }}
        />
        <Story
          args={{
            label: "Twitter",
            icon: <Icon icon={<FaTwitter />} className="text-blue-500" />,
            onlyIcon: true,
            "aria-label": "Twitter",
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
      <div className="flex flex-col gap-4">
        <Story
          args={{
            label: "Login with GitHub",
            icon: <Icon icon={<FaGithub />} className="text-white" />,
            className:
              "bg-black hover:bg-black/80 active:bg-black/90 text-white border-black text-sm",
          }}
        />
        <Story
          args={{
            label: "Login with Google",
            icon: <Icon icon={<FaGoogle />} className="text-red-500" />,
            className:
              "bg-white hover:bg-white/80 active:bg-white/90 text-black border-[#e5e5e5] text-sm",
          }}
        />
        <Story
          args={{
            label: "Login with Facebook",
            icon: <Icon icon={<FaFacebook />} className="text-white" />,
            className:
              "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue text-sm text-default-900",
          }}
        />
        <Story
          args={{
            label: "Login with X (Twitter)",
            icon: <Icon icon={<FaXTwitter />} className="text-white" />,
            className:
              "bg-black hover:bg-black/80 active:bg-black/90 text-white border-black text-sm",
          }}
        />
        <Story
          args={{
            label: "카카오 로그인",
            icon: (
              <Icon
                icon={
                  <svg
                    aria-label="Kakao logo"
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#181600"
                      d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"
                    ></path>
                  </svg>
                }
                className="text-white"
              />
            ),
            className:
              "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-black border-yellow text-sm",
          }}
        />
        <Story
          args={{
            label: "Login with Apple",
            icon: <Icon icon={<FaApple />} className="text-white" />,
            className:
              "bg-black hover:bg-black/80 active:bg-black/90 text-white border-black text-sm",
          }}
        />
        <Story
          args={{
            label: "Login with Amazon",
            icon: <Icon icon={<FaAmazon />} className="text-black" />,
            className:
              "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-black border-yellow text-sm",
          }}
        />
        <Story
          args={{
            label: "Login with Microsoft",
            icon: <Icon icon={<FaMicrosoft />} className="text-blue-600" />,
            className:
              "bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white border-gray text-sm",
          }}
        />
        <Story
          args={{
            label: "Login with Line",
            icon: (
              <Icon
                icon={<SiLine role="presentation" />}
                className="text-white"
              />
            ),
            className:
              "bg-green-500 hover:bg-green-600 active:bg-green-700 border-green text-sm text-default-900",
          }}
        />
        <Story
          args={{
            label: "Login with Slack",
            icon: (
              <Icon
                icon={<SiSlack role="presentation" />}
                className="text-white"
              />
            ),
            className:
              "bg-purple-500 hover:bg-purple-600 active:bg-purple-700 border-purple text-sm text-black",
          }}
        />
        <Story
          args={{
            label: "Login with LinkedIn",
            icon: <Icon icon={<FaLinkedin />} className="text-white" />,
            className:
              "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue text-sm text-default-900",
          }}
        />
      </div>
    ),
  ],
};
