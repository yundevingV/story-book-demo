import { Checkbox } from "../../components";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "체크박스 라벨 텍스트",
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "체크박스 크기",
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "primary", "success", "error"],
      description: "체크박스 색상 변형",
    },
    error: {
      control: { type: "boolean" },
      description: "에러 상태",
    },
    disabled: {
      control: { type: "boolean" },
      description: "비활성화 상태",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "이용약관에 동의합니다",
    "aria-label": "이용약관에 동의합니다",
    id: "default-checkbox",
  },
};

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox
        size="sm"
        label="Small Checkbox"
        aria-label="Small Checkbox"
        id="small-checkbox"
      />
      <Checkbox
        size="md"
        label="Medium Checkbox"
        aria-label="Medium Checkbox"
        id="medium-checkbox"
      />
      <Checkbox
        size="lg"
        label="Large Checkbox"
        aria-label="Large Checkbox"
        id="large-checkbox"
      />
    </div>
  ),
};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox
        variant="default"
        label="Default"
        defaultChecked
        aria-label="Default"
        id="default-checkbox"
      />
      <Checkbox
        variant="primary"
        label="Primary"
        defaultChecked
        aria-label="Primary"
        id="primary-checkbox"
      />
      <Checkbox
        variant="success"
        label="Success"
        defaultChecked
        aria-label="Success"
        id="success-checkbox"
      />
      <Checkbox
        variant="error"
        label="Error"
        defaultChecked
        aria-label="Error"
        id="error-checkbox"
      />
    </div>
  ),
};

export const States: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox
        label="Unchecked"
        aria-label="Unchecked"
        id="unchecked-checkbox"
      />
      <Checkbox
        label="Checked"
        defaultChecked
        aria-label="Checked"
        id="checked-checkbox"
      />
      <Checkbox
        label="Indeterminate"
        checked="indeterminate"
        aria-label="Indeterminate"
        id="indeterminate-checkbox"
      />
      <Checkbox
        label="Disabled"
        disabled
        aria-label="Disabled"
        id="disabled-checkbox"
      />
      <Checkbox
        label="Disabled Checked"
        disabled
        defaultChecked
        aria-label="Disabled Checked"
        id="disabled-checked-checkbox"
      />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: "마케팅 정보 수신 동의",
    description: "이메일과 SMS로 마케팅 정보를 받아보실 수 있습니다",
    helperText: "언제든지 설정에서 변경할 수 있습니다",
    "aria-label": "마케팅 정보 수신 동의",
    id: "with-helper-text-checkbox",
  },
};

export const ErrorState: Story = {
  args: {
    label: "필수 약관 동의",
    error: true,
    helperText: "이 항목은 반드시 선택해야 합니다",
    "aria-label": "필수 약관 동의",
    id: "error-checkbox",
  },
};
