"use client";

import SuccessLoginExample from "../input/components/SuccessLoginExample";
import {
  DocumentationLayout,
  DocumentationSection,
  SectionContent,
} from "@/components/documentation";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function CardPage() {
  return (
    <DocumentationLayout title="Card" description="Displays a card.">
      <DocumentationSection id="basic-usage">
        <SectionContent
          preview={<SuccessLoginExample />}
          code={reactElementToJSXString(SuccessLoginExample(), {})}
        />
      </DocumentationSection>
    </DocumentationLayout>
  );
}
