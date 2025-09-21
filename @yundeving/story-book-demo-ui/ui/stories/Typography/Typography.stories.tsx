import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "../../components/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

const meta: Meta = {
  title: "Typography",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// H1 헤딩
export const H1: Story = {
  render: () => <TypographyH1>제목 1</TypographyH1>,
};

// H2 헤딩
export const H2: Story = {
  render: () => <TypographyH2>제목 2</TypographyH2>,
};

// H3 헤딩
export const H3: Story = {
  render: () => <TypographyH3>제목 3</TypographyH3>,
};

// H4 헤딩
export const H4: Story = {
  render: () => <TypographyH4>제목 4</TypographyH4>,
};

// P 문단
export const P: Story = {
  render: () => <TypographyP>기본 글씨</TypographyP>,
};

// 모든 Typography 조합
export const All: Story = {
  render: () => (
    <div className="space-y-4">
      <TypographyH1>메인 제목</TypographyH1>
      <TypographyH2>섹션 제목</TypographyH2>
      <TypographyH3>하위 제목</TypographyH3>
      <TypographyH4>소제목</TypographyH4>
      <TypographyP>
        이것은 일반적인 문단 텍스트입니다. 여러 줄로 구성된 내용을 표시할 때
        사용합니다.
      </TypographyP>
    </div>
  ),
};
