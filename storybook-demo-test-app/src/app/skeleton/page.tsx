"use client";

import DataLoadingSkeleton from "./components/DataLoadingSkeleton";
import DefaultSkeleton from "./components/DefaultSkeleton";
import HorizonSkeleton from "./components/HorizonSkeleton";
import {
  DocumentationLayout,
  DocumentationSection,
  SectionContent,
} from "@/components/documentation";
import reactElementToJSXString from "react-element-to-jsx-string";

const skeletonSections = [
  {
    id: "default-usage",
    component: DefaultSkeleton,
    code: reactElementToJSXString(DefaultSkeleton(), {}),
  },

  {
    id: "horizon-usage",
    component: HorizonSkeleton,
    code: reactElementToJSXString(HorizonSkeleton(), {}),
  },
  {
    id: "data-loading-usage",
    component: DataLoadingSkeleton,
    code: reactElementToJSXString(DataLoadingSkeleton(), {}),
  },
];

export default function SkeletonPage() {
  return (
    <DocumentationLayout title="Skeleton" description="Displays a skeleton.">
      {skeletonSections.map(({ id, component: Component, code }) => (
        <DocumentationSection key={id} id={id}>
          <SectionContent preview={<Component />} code={code} />
        </DocumentationSection>
      ))}
    </DocumentationLayout>
  );
}
