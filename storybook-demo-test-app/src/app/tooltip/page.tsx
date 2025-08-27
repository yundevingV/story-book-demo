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

const tooltipSections = [
  { id: "basic-usage", component: DefaultTooltip },
  { id: "position-usage", component: PositionTooltip },
  { id: "delay-usage", component: DelayTooltip },
  { id: "without-arrow-usage", component: WithoutArrowTooltip },
];

export default function TooltipPage() {
  return (
    <DocumentationLayout title="Tooltip" description="Displays a tooltip.">
      {tooltipSections.map(({ id, component: Component }) => (
        <DocumentationSection key={id} id={id}>
          <SectionContent
            preview={<Component />}
            code={reactElementToJSXString(Component(), {})}
          />
        </DocumentationSection>
      ))}
    </DocumentationLayout>
  );
}
