"use client";

import DefaultButton from "./components/DefaultButton";
import DisabledButton from "./components/DisabledButton";
import FacebookLoginButton from "./components/FacbookLoginButton";
import LoadingButton from "./components/LoadingButton";
import SecondaryButton from "./components/Secondary";
import {
  DocumentationLayout,
  DocumentationSection,
  SectionContent,
  SectionTitle,
} from "@/components/documentation";
import { Icon, IconButton } from "@yundeving/story-book-demo-ui";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { FaCheck } from "react-icons/fa";

export default function ButtonPage() {
  return (
    <DocumentationLayout
      title="Button"
      description="Displays a button or a component that looks like a button."
    >
      <DocumentationSection id="basic-usage">
        <SectionContent
          preview={<DefaultButton />}
          code={reactElementToJSXString(DefaultButton())}
        />
      </DocumentationSection>

      <DocumentationSection id="secondary-button">
        <SectionTitle>Secondary</SectionTitle>
        <SectionContent
          preview={<SecondaryButton />}
          code={reactElementToJSXString(SecondaryButton())}
        />
      </DocumentationSection>

      <DocumentationSection id="icon">
        <SectionTitle>Icon</SectionTitle>
        <SectionContent
          preview={<IconButton onlyIcon icon={<Icon icon={<FaCheck />} />} />}
          code={reactElementToJSXString(
            <IconButton onlyIcon icon={<Icon icon={<FaCheck />} />} />
          )}
        />
      </DocumentationSection>

      <DocumentationSection id="icon-button">
        <SectionTitle>Icon With Button</SectionTitle>
        <SectionContent
          preview={<FacebookLoginButton />}
          code={reactElementToJSXString(FacebookLoginButton())}
        />
      </DocumentationSection>

      <DocumentationSection id="status-button">
        <SectionTitle>Loading</SectionTitle>
        <SectionContent
          preview={<LoadingButton />}
          code={reactElementToJSXString(LoadingButton())}
        />
      </DocumentationSection>

      <DocumentationSection id="disabled-button">
        <SectionTitle>Disabled</SectionTitle>
        <SectionContent
          preview={<DisabledButton />}
          code={reactElementToJSXString(DisabledButton())}
        />
      </DocumentationSection>
    </DocumentationLayout>
  );
}
