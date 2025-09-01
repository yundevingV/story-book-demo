"use client";

import DefaultSelect from "./components/DefaultSelect";
import {
  DocumentationLayout,
  DocumentationSection,
  SectionContent,
} from "@/components/documentation";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function SelectPage() {
  return (
    <DocumentationLayout title="Select" description="Displays a select ">
      <DocumentationSection id="default-select">
        <SectionContent
          preview={<DefaultSelect />}
          code={reactElementToJSXString(DefaultSelect())}
        />
      </DocumentationSection>
    </DocumentationLayout>
  );
}
