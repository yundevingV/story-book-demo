import { Button, Divider, Icon, Input, Label } from "../../components";
import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { FaAmazon, FaApple, FaFacebook } from "react-icons/fa";

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
      <div className="flex w-96 flex-col gap-4 p-4">
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
        className="border border-gray-400 bg-transparent"
      />
    </div>
  ),
};

export const WithLabel: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <div className="flex w-96 flex-col gap-4 p-4">
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
    <div className="flex w-96 flex-col gap-4 p-4">
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
      <Button
        leftIcon={<Icon icon={<FaApple />} className="text-white-500" />}
        label="Login with Apple"
        className="border-black bg-black text-sm text-white hover:bg-black/80 active:bg-black/90"
      />
      <Button
        leftIcon={<Icon icon={<FaFacebook />} className="text-white-500" />}
        label="Login with Facebook"
        className="text-default-900 border-blue bg-blue-500 text-sm hover:bg-blue-600 active:bg-blue-700"
      />
      <Button
        leftIcon={<Icon icon={<FaAmazon />} className="text-white-500" />}
        label="Login with Amazon"
        className="border-amber bg-amber-500 text-sm text-black hover:bg-amber-600 active:bg-amber-700"
      />
    </div>
  ),
};
