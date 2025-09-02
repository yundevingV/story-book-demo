import { RadioGroup } from "../../components";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
  title: "RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: { type: "object" },
      description: "라디오 옵션 배열",
    },
    value: {
      control: { type: "text" },
      description: "선택된 값",
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "라디오 크기",
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "primary", "success", "error"],
      description: "라디오 색상 변형",
    },
    disabled: {
      control: { type: "boolean" },
      description: "비활성화 상태",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup
        options={[
          { value: "option1", label: "첫 번째 옵션" },
          { value: "option2", label: "두 번째 옵션" },
          { value: "option3", label: "세 번째 옵션" },
        ]}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [smValue, setSmValue] = useState("sm1");
    const [mdValue, setMdValue] = useState("md1");
    const [lgValue, setLgValue] = useState("lg1");

    return (
      <div className="flex flex-col gap-6">
        <div>
          <h4 className="text-default-800 dark:text-default-200 mb-2 text-sm font-medium">
            Small
          </h4>
          <RadioGroup
            size="sm"
            options={[
              { value: "sm1", label: "Small Option 1" },
              { value: "sm2", label: "Small Option 2" },
              { value: "sm3", label: "Small Option 3" },
            ]}
            value={smValue}
            onValueChange={setSmValue}
          />
        </div>
        <div>
          <h4 className="text-default-800 dark:text-default-200 mb-2 text-sm font-medium">
            Medium
          </h4>
          <RadioGroup
            size="md"
            options={[
              { value: "md1", label: "Medium Option 1" },
              { value: "md2", label: "Medium Option 2" },
              { value: "md3", label: "Medium Option 3" },
            ]}
            value={mdValue}
            onValueChange={setMdValue}
          />
        </div>
        <div>
          <h4 className="text-default-800 dark:text-default-200 mb-2 text-sm font-medium">
            Large
          </h4>
          <RadioGroup
            size="lg"
            options={[
              { value: "lg1", label: "Large Option 1" },
              { value: "lg2", label: "Large Option 2" },
              { value: "lg3", label: "Large Option 3" },
            ]}
            value={lgValue}
            onValueChange={setLgValue}
          />
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [defaultValue, setDefaultValue] = useState("default1");
    const [primaryValue, setPrimaryValue] = useState("primary1");
    const [successValue, setSuccessValue] = useState("success1");
    const [errorValue, setErrorValue] = useState("error1");

    return (
      <div className="flex flex-col gap-6">
        <div>
          <h4 className="text-default-800 dark:text-default-200 mb-2 text-sm font-medium">
            Default
          </h4>
          <RadioGroup
            variant="default"
            options={[
              { value: "default1", label: "Default Option" },
              { value: "default2", label: "Another Option" },
            ]}
            value={defaultValue}
            onValueChange={setDefaultValue}
          />
        </div>
        <div>
          <h4 className="text-default-800 dark:text-default-200 mb-2 text-sm font-medium">
            Primary
          </h4>
          <RadioGroup
            variant="primary"
            options={[
              { value: "primary1", label: "Primary Option" },
              { value: "primary2", label: "Another Option" },
            ]}
            value={primaryValue}
            onValueChange={setPrimaryValue}
          />
        </div>
        <div>
          <h4 className="text-default-800 dark:text-default-200 mb-2 text-sm font-medium">
            Success
          </h4>
          <RadioGroup
            variant="success"
            options={[
              { value: "success1", label: "Success Option" },
              { value: "success2", label: "Another Option" },
            ]}
            value={successValue}
            onValueChange={setSuccessValue}
          />
        </div>
        <div>
          <h4 className="text-default-800 dark:text-default-200 mb-2 text-sm font-medium">
            Error
          </h4>
          <RadioGroup
            variant="error"
            options={[
              { value: "error1", label: "Error Option" },
              { value: "error2", label: "Another Option" },
            ]}
            value={errorValue}
            onValueChange={setErrorValue}
          />
        </div>
      </div>
    );
  },
};

export const States: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [unselectedValue, setUnselectedValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("selected1");
    const [disabledValue, setDisabledValue] = useState("disabled1");
    const [mixedValue, setMixedValue] = useState("mixed1");

    return (
      <div className="flex flex-col gap-6">
        <div>
          <h4 className="text-default-800 dark:text-default-200 mb-2 text-sm font-medium">
            Default (No Selection)
          </h4>
          <RadioGroup
            options={[
              { value: "unselected1", label: "Option 1" },
              { value: "unselected2", label: "Option 2" },
              { value: "unselected3", label: "Option 3" },
            ]}
            value={unselectedValue}
            onValueChange={setUnselectedValue}
          />
        </div>
        <div>
          <h4 className="text-default-800 dark:text-default-200 mb-2 text-sm font-medium">
            With Selection
          </h4>
          <RadioGroup
            options={[
              { value: "selected1", label: "Selected Option" },
              { value: "selected2", label: "Option 2" },
              { value: "selected3", label: "Option 3" },
            ]}
            value={selectedValue}
            onValueChange={setSelectedValue}
          />
        </div>
        <div>
          <h4 className="text-default-800 dark:text-default-200 mb-2 text-sm font-medium">
            Disabled
          </h4>
          <RadioGroup
            disabled
            options={[
              { value: "disabled1", label: "Disabled Option 1" },
              { value: "disabled2", label: "Disabled Option 2" },
              { value: "disabled3", label: "Disabled Option 3" },
            ]}
            value={disabledValue}
            onValueChange={setDisabledValue}
          />
        </div>
        <div>
          <h4 className="text-default-800 dark:text-default-200 mb-2 text-sm font-medium">
            Some Disabled Options
          </h4>
          <RadioGroup
            options={[
              { value: "mixed1", label: "Available Option" },
              { value: "mixed2", label: "Disabled Option", disabled: true },
              { value: "mixed3", label: "Another Available" },
            ]}
            value={mixedValue}
            onValueChange={setMixedValue}
          />
        </div>
      </div>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const [planValue, setPlanValue] = useState("plan2");

    return (
      <RadioGroup
        options={[
          {
            value: "plan1",
            label: "기본 플랜",
            description: "개인 사용자를 위한 기본적인 기능을 제공합니다",
          },
          {
            value: "plan2",
            label: "프로 플랜",
            description: "비즈니스 사용자를 위한 고급 기능을 포함합니다",
          },
          {
            value: "plan3",
            label: "엔터프라이즈 플랜",
            description: "대규모 조직을 위한 모든 기능과 지원을 제공합니다",
          },
        ]}
        value={planValue}
        onValueChange={setPlanValue}
      />
    );
  },
};

export const FormExample: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [contactMethod, setContactMethod] = useState("email");
    const [satisfaction, setSatisfaction] = useState("satisfied");

    return (
      <div className="max-w-md space-y-6">
        <div>
          <h3 className="text-default-800 dark:text-default-200 mb-4 text-lg font-semibold">
            설문조사
          </h3>

          <div className="space-y-4">
            <div>
              <label className="text-default-800 dark:text-default-200 mb-2 block text-sm font-medium">
                선호하는 연락 방법을 선택해주세요
              </label>
              <RadioGroup
                variant="primary"
                options={[
                  { value: "email", label: "이메일" },
                  { value: "phone", label: "전화" },
                  { value: "sms", label: "문자 메시지" },
                ]}
                value={contactMethod}
                onValueChange={setContactMethod}
              />
            </div>

            <div>
              <label className="text-default-800 dark:text-default-200 mb-2 block text-sm font-medium">
                서비스 만족도를 평가해주세요
              </label>
              <RadioGroup
                variant="success"
                size="sm"
                options={[
                  { value: "very-satisfied", label: "매우 만족" },
                  { value: "satisfied", label: "만족" },
                  { value: "neutral", label: "보통" },
                  { value: "dissatisfied", label: "불만족" },
                  { value: "very-dissatisfied", label: "매우 불만족" },
                ]}
                value={satisfaction}
                onValueChange={setSatisfaction}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};
