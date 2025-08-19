import type { Meta, StoryObj } from "@storybook/nextjs";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    delay: {
      control: { type: "number", min: 0, max: 2000, step: 100 },
    },
  },
  args: {
    content: "이것은 툴팁입니다!",
    position: "top",
    size: "md",
    delay: 300,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

// 기본 툴팁
export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>마우스를 올려보세요</Button>
    </Tooltip>
  ),
};

// 다양한 위치
export const Positions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center justify-center p-8">
      <Tooltip content="위쪽 툴팁" position="top">
        <Button>Top</Button>
      </Tooltip>

      <Tooltip content="아래쪽 툴팁" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>

      <Tooltip content="왼쪽 툴팁" position="left">
        <Button>Left</Button>
      </Tooltip>

      <Tooltip content="오른쪽 툴팁" position="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

// 다양한 크기
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip content="작은 툴팁" size="sm">
        <Button>Small</Button>
      </Tooltip>

      <Tooltip content="중간 툴팁" size="md">
        <Button>Medium</Button>
      </Tooltip>

      <Tooltip content="큰 툴팁" size="lg">
        <Button>Large</Button>
      </Tooltip>
    </div>
  ),
};

// 다양한 요소들
export const DifferentElements: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <Tooltip content="버튼 툴팁">
        <Button>Button</Button>
      </Tooltip>

      <Tooltip content="링크 툴팁">
        <a
          href="#"
          className="text-primary-500 dark:text-primary-400 hover:underline"
        >
          Link
        </a>
      </Tooltip>

      <Tooltip content="아이콘 툴팁">
        <div className="w-8 h-8 bg-default-200 rounded-full flex items-center justify-center cursor-pointer">
          ℹ️
        </div>
      </Tooltip>

      <Tooltip content="텍스트 툴팁">
        <span className="text-default-600 dark:text-default-400 cursor-help border-b border-dotted border-default-400">
          Hover me
        </span>
      </Tooltip>
    </div>
  ),
};

// 지연 시간 테스트
export const DelayTest: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip content="빠른 툴팁 (0ms)" delay={0}>
        <Button>Fast</Button>
      </Tooltip>

      <Tooltip content="보통 툴팁 (500ms)" delay={500}>
        <Button>Normal</Button>
      </Tooltip>

      <Tooltip content="느린 툴팁 (1000ms)" delay={1000}>
        <Button>Slow</Button>
      </Tooltip>
    </div>
  ),
};

export const WithoutArrow: Story = {
  render: () => (
    <Tooltip content="Without Arrow (500ms)" isArrow={false}>
      <Button>Without Arrow</Button>
    </Tooltip>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Tooltip
      content={`With Long Content (500ms)
      With Long Content (500ms)`}
    >
      <Button>With Long Content</Button>
    </Tooltip>
  ),
};

// 실제 사용 예시
export const RealWorldExample: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="flex items-center gap-2">
        <span>사용자 이름:</span>
        <Tooltip content="사용자의 실제 이름을 입력하세요">
          <span className="text-default-600 dark:text-default-400 cursor-help">
            ℹ️
          </span>
        </Tooltip>
      </div>

      <div className="flex items-center gap-2">
        <span>이메일:</span>
        <Tooltip content="로그인에 사용될 이메일 주소입니다">
          <span className="text-default-600 dark:text-default-400 cursor-help">
            ℹ️
          </span>
        </Tooltip>
      </div>

      <div className="flex items-center gap-2">
        <span>비밀번호:</span>
        <Tooltip content="8자 이상, 영문+숫자+특수문자 조합">
          <span className="text-default-600 dark:text-default-400 cursor-help">
            ℹ️
          </span>
        </Tooltip>
      </div>
    </div>
  ),
};
