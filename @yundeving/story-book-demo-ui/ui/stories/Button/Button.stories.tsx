import { Icon } from "../../components";
import Button from "../../components/Button";
import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaMicrosoft,
  FaXTwitter,
  FaDownload,
} from "react-icons/fa6";
import { SiLine } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { fn } from "storybook/test";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
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
      options: [
        "default",
        "primary",
        "secondary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
      ],
      description: "버튼 타입을 설정할 수 있습니다.",
    },
    isLoading: {
      control: { type: "radio" },
      options: [true, false],
      description: "버튼 상태를 설정할 수 있습니다.",
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "버튼 크기를 설정할 수 있습니다.",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Example: Story = {
  args: {
    label: "Button",
  },
};

export const VariantButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="grid grid-cols-3 gap-4">
        <Story args={{ label: "default", variant: "default" }} />
        <Story args={{ label: "primary", variant: "primary" }} />
        <Story args={{ label: "secondary", variant: "secondary" }} />
        <Story args={{ label: "accent", variant: "accent" }} />
        <Story args={{ label: "info", variant: "info" }} />
        <Story args={{ label: "success", variant: "success" }} />
        <Story args={{ label: "warning", variant: "warning" }} />
        <Story args={{ label: "error", variant: "error" }} />
        <Story args={{ label: "ghost", variant: "ghost" }} />
      </div>
    ),
  ],
};

export const SizeButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story args={{ label: "md", size: "md" }} />
        <Story args={{ label: "sm", size: "sm" }} />
        <Story args={{ label: "lg", size: "lg" }} />
      </div>
    ),
  ],
};

export const LoadingButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story args={{ label: "default", isLoading: true }} />
      </div>
    ),
  ],
};

export const IconButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story args={{ label: "default", leftIcon: <FaDownload /> }} />
        <Story args={{ label: "default", rightIcon: <FaDownload /> }} />
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
            leftIcon: <Icon icon={<FaGithub />} className="text-white" />,
            className:
              "bg-black hover:bg-black/80 active:bg-black/90 text-white border-black text-sm",
          }}
        />
        <Story
          args={{
            label: "Login with Google",
            leftIcon: <Icon icon={<FaGoogle />} className="text-red-500" />,
            className:
              "bg-white hover:bg-white/80 active:bg-white/90 text-black border-[#e5e5e5] text-sm",
          }}
        />
        <Story
          args={{
            label: "Login with Facebook",
            leftIcon: <Icon icon={<FaFacebook />} className="text-white" />,
            className:
              "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue text-sm text-default-900",
          }}
        />
        <Story
          args={{
            label: "Login with X (Twitter)",
            leftIcon: <Icon icon={<FaXTwitter />} className="text-white" />,
            className:
              "bg-black hover:bg-black/80 active:bg-black/90 text-white border-black text-sm",
          }}
        />
        <Story
          args={{
            label: "카카오 로그인",
            leftIcon: (
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
            leftIcon: <Icon icon={<FaApple />} className="text-white" />,
            className:
              "bg-black hover:bg-black/80 active:bg-black/90 text-white border-black text-sm",
          }}
        />
        <Story
          args={{
            label: "Login with Amazon",
            leftIcon: <Icon icon={<FaAmazon />} className="text-black" />,
            className:
              "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-black border-yellow text-sm",
          }}
        />
        <Story
          args={{
            label: "Login with Microsoft",
            leftIcon: <Icon icon={<FaMicrosoft />} className="text-blue-600" />,
            className:
              "bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white border-gray text-sm",
          }}
        />
        <Story
          args={{
            label: "Login with Line",
            leftIcon: (
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
            leftIcon: (
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
            leftIcon: <Icon icon={<FaLinkedin />} className="text-white" />,
            className:
              "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue text-sm text-default-900",
          }}
        />
      </div>
    ),
  ],
};
