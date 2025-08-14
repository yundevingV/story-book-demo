import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "../Button/Button"; // 기존 Button 컴포넌트 import

import { Input } from "./Input";
import { Label } from "../Label/Label";
import { Icon } from "../icon/Icon";
import { FaAmazon, FaApple, FaFacebook } from "react-icons/fa";
import { IconButton } from "../IconButton/IconButton";
import { Divider } from "../Divider/Divider";

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
      <div className="flex flex-col gap-4 p-4 w-96">
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

// Input과 Button을 함께 사용하는 스토리
export const WithButton: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <div className="flex gap-4 p-4">
      <Input type="email" placeholder="email" {...args} />
      <Button
        variant="default"
        label="Subscribe"
        className="bg-transparent border border-gray-400"
      />
    </div>
  ),
};

export const WithLabel: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <div className="flex flex-col gap-4 p-4 w-96">
      <Label>Email</Label>
      <Input type="email" placeholder="email" {...args} />
    </div>
  ),
};

export const LoginForm: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-col gap-4 p-4 w-96">
      <Label htmlFor="email">Email</Label>
      <Input type="email" placeholder="email" id="email" />
      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        placeholder="password"
        helperText="Password must be at least 8 characters long"
        id="password"
      />
      <Button variant="success" label="Login" size="md" />
      <Divider />
      <IconButton
        icon={<Icon icon={<FaApple />} className="text-white-500" />}
        label="Login with Apple"
        className="bg-black hover:bg-black/80 active:bg-black/90 text-white border-black text-sm"
      />
      <IconButton
        icon={<Icon icon={<FaFacebook />} className="text-white-500" />}
        label="Login with Facebook"
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white border-blue text-sm"
      />
      <IconButton
        icon={<Icon icon={<FaAmazon />} className="text-white-500" />}
        label="Login with Amazon"
        className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black border-amber text-sm"
      />
    </div>
  ),
};
