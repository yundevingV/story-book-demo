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
  {
    id: "basic-usage",
    component: DefaultTooltip,
    code: reactElementToJSXString(DefaultTooltip(), {}),
  },
  {
    id: "position-usage",
    component: PositionTooltip,
    code: reactElementToJSXString(PositionTooltip(), {}),
  },
  {
    id: "delay-usage",
    component: DelayTooltip,
    code: reactElementToJSXString(DelayTooltip(), {}),
  },
  {
    id: "without-arrow-usage",
    component: WithoutArrowTooltip,
    code: reactElementToJSXString(WithoutArrowTooltip(), {}),
  },
];

export default function TooltipPage() {
  return (
    <DocumentationLayout title="Tooltip" description="Displays a tooltip.">
      {tooltipSections.map(({ id, component: Component, code }) => (
        <DocumentationSection key={id} id={id}>
          <SectionContent preview={<Component />} code={code} />
        </DocumentationSection>
      ))}
    </DocumentationLayout>
  );
}
