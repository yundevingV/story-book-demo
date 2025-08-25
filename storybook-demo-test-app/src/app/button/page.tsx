"use client";

import React from "react";
import {
  Button,
  Icon,
  IconButton,
  StatusButton,
} from "@yundeving/story-book-demo-ui";
import {
  DocumentationLayout,
  DocumentationSection,
  SectionTitle,
  SectionContent,
} from "@/components/documentation";
import { FaCheck, FaFacebook } from "react-icons/fa";

export default function ButtonPage() {
  return (
    <DocumentationLayout
      title="Button"
      description="Displays a button or a component that looks like a button."
    >
      {/* 기본 사용법 */}
      <DocumentationSection id="basic-usage">
        <SectionContent
          preview={<Button label="기본 버튼" />}
          code={`import { Button } from "@yundeving/story-book-demo-ui";

<Button label="기본 버튼" />`}
        />
      </DocumentationSection>

      <DocumentationSection id="secondary-button" className="">
        <SectionTitle>Secondary</SectionTitle>
        <SectionContent
          preview={<Button label="secondary" variant="secondary" />}
          code={`import { Button } from "@yundeving/story-book-demo-ui";

<Button label="secondary" variant="secondary" />`}
        />
      </DocumentationSection>

      <DocumentationSection id="icon" className="">
        <SectionTitle>Icon</SectionTitle>
        <SectionContent
          preview={<IconButton onlyIcon icon={<Icon icon={<FaCheck />} />} />}
          code={`import { IconButton } from "@yundeving/story-book-demo-ui";

<IconButton onlyIcon icon={<Icon icon={<FaCheck />} />} />`}
        />
      </DocumentationSection>

      <DocumentationSection id="icon-button" className="">
        <SectionTitle>Icon With Button</SectionTitle>
        <SectionContent
          preview={
            <IconButton
              label="Login with Facebook"
              className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue text-sm text-default-900"
              icon={<Icon icon={<FaFacebook />} className="text-white" />}
            />
          }
          code={`import { IconButton } from "@yundeving/story-book-demo-ui";

<IconButton
  label="Login with Facebook"
  className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue text-sm text-default-900"
  icon={<Icon icon={<FaFacebook />} className="text-white" />}
/>`}
        />
      </DocumentationSection>

      <DocumentationSection id="status-button" className="">
        <SectionTitle>Loading</SectionTitle>
        <SectionContent
          preview={<StatusButton label="Loading" status="loading" />}
          code={`import { StatusButton } from "@yundeving/story-book-demo-ui";

<StatusButton label="Loading" status="loading" />`}
        />
      </DocumentationSection>

      <DocumentationSection id="disabled-button" className="">
        <SectionTitle>Disabled</SectionTitle>
        <SectionContent
          preview={<Button label="Disabled" disabled />}
          code={`import { Button } from "@yundeving/story-book-demo-ui";

<Button label="Disabled" disabled />`}
        />
      </DocumentationSection>
    </DocumentationLayout>
  );
}
