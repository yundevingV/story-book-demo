"use client";

import DefaultTooltip from "./components/DefaultTooltip";
import DelayTooltip from "./components/DelayTooltip";
import PositionTooltip from "./components/PositionTooltip";
import WithoutArrowTooltip from "./components/WithoutArrowTooltip";
import {
  DocumentationLayout,
  DocumentationSection,
  SectionContent,
} from "@/components/documentation";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function TooltipPage() {
  return (
    <DocumentationLayout title="Tooltip" description="Displays a tooltip.">
      <DocumentationSection id="basic-usage">
        <SectionContent
          preview={<DefaultTooltip />}
          code={reactElementToJSXString(DefaultTooltip(), {})}
        />
      </DocumentationSection>
      <DocumentationSection id="position-usage">
        <SectionContent
          preview={<PositionTooltip />}
          code={reactElementToJSXString(PositionTooltip(), {})}
        />
      </DocumentationSection>
      <DocumentationSection id="delay-usage">
        <SectionContent
          preview={<DelayTooltip />}
          code={reactElementToJSXString(DelayTooltip(), {})}
        />
      </DocumentationSection>
      <DocumentationSection id="without-arrow-usage">
        <SectionContent
          preview={<WithoutArrowTooltip />}
          code={reactElementToJSXString(WithoutArrowTooltip(), {})}
        />
      </DocumentationSection>
    </DocumentationLayout>
  );
}
