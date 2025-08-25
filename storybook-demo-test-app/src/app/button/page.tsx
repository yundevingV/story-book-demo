"use client";

import React from "react";
import { Button, Icon, IconButton } from "@yundeving/story-book-demo-ui";
import {
  DocumentationLayout,
  DocumentationSection,
  SectionTitle,
} from "@/components/documentation";
import SectionContent from "@/components/documentation/SectionContent";
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

      <DocumentationSection id="basic-usage" className="">
        <SectionTitle>Secondary</SectionTitle>
        <SectionContent
          preview={<Button label="secondary" variant="secondary" />}
          code={`import { Button } from "@yundeving/story-book-demo-ui";

<Button label="secondary" variant="secondary" />`}
        />
      </DocumentationSection>

      <DocumentationSection id="basic-usage" className="">
        <SectionTitle>Icon</SectionTitle>
        <SectionContent
          preview={<IconButton onlyIcon icon={<Icon icon={<FaCheck />} />} />}
          code={`import { IconButton } from "@yundeving/story-book-demo-ui";

<IconButton onlyIcon icon={<Icon icon={<FaCheck />} />} />`}
        />
      </DocumentationSection>

      <DocumentationSection id="basic-usage" className="">
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
    </DocumentationLayout>
  );
}
