import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/internal/test";
import React from "react";
import StatusButton from "../../components/StatusButton";

const meta: Meta<typeof StatusButton> = {
  title: "Button",
  component: StatusButton,
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
} satisfies Meta<typeof StatusButton>;

export default meta;
type Story = StoryObj<typeof StatusButton>;

export const StatusButtonList: Story = {
  parameters: {
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story
          args={{
            label: "Loading",
            variant: "default",
            state: "loading",
          }}
        />
        <Story
          args={{
            label: "Success",
            variant: "success",
            state: "success",
          }}
        />
        <Story
          args={{
            label: "Error",
            variant: "error",
            state: "error",
          }}
        />
      </div>
    ),
  ],
};

// export const OnlyStatusButtonList: Story = {
//   parameters: {
//     controls: { disable: true },
//   },
//   decorators: [
//     (Story) => (
//       <div className="flex gap-4">
//         <Story
//           args={{
//             label: "Chrome",
//             icon: <FaChrome />,
//             onlyIcon: true,
//           }}
//         />
//         <Story
//           args={{
//             label: "Facebook",
//             icon: <FaFacebook />,
//             onlyIcon: true,
//           }}
//         />
//         <Story
//           args={{
//             label: "Instagram",
//             icon: <FaInstagram />,
//             onlyIcon: true,
//           }}
//         />
//         <Story
//           args={{
//             label: "Twitter",
//             icon: <FaTwitter />,
//             onlyIcon: true,
//           }}
//         />
//       </div>
//     ),
//   ],
// };
