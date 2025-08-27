"use client";

import DefaultBadge from "./components/DefaultBadge";
import LongTextBadge from "./components/LongTextBadge";
import SizeBadge from "./components/SizeBadge";
import VariantBadge from "./components/VariantBadge";
import {
  DocumentationLayout,
  DocumentationSection,
  SectionContent,
} from "@/components/documentation";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function BadgePage() {
  return (
    <DocumentationLayout
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
    >
      <DocumentationSection id="basic-usage">
        <SectionContent
          preview={<DefaultBadge />}
          code={reactElementToJSXString(DefaultBadge())}
        />
      </DocumentationSection>

      <DocumentationSection id="variant">
        <SectionContent
          preview={<VariantBadge />}
          code={reactElementToJSXString(VariantBadge())}
        />
      </DocumentationSection>

      <DocumentationSection id="size">
        <SectionContent
          preview={<SizeBadge />}
          code={reactElementToJSXString(SizeBadge())}
        />
      </DocumentationSection>
      <DocumentationSection id="long-text">
        <SectionContent
          preview={<LongTextBadge />}
          code={reactElementToJSXString(LongTextBadge())}
        />
      </DocumentationSection>
    </DocumentationLayout>
  );
}
