"use client";

import {
  DocumentationLayout,
  DocumentationSection,
  SectionContent,
} from "@/components/documentation";
import { Badge } from "@yundeving/story-book-demo-ui";

export default function BadgePage() {
  return (
    <DocumentationLayout
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
    >
      <DocumentationSection id="basic-usage">
        <SectionContent
          preview={<Badge> Badge </Badge>}
          code={`import { Badge } from "@yundeving/story-book-demo-ui";

<Badge> Badge </Badge> `}
        />
      </DocumentationSection>

      <DocumentationSection id="variant">
        <SectionContent
          preview={
            <>
              <Badge variant="primary"> Badge </Badge>
              <Badge variant="secondary"> Badge </Badge>
              <Badge variant="success"> Badge </Badge>
              <Badge variant="warning"> Badge </Badge>
              <Badge variant="info"> Badge </Badge>
            </>
          }
          code={`import { Badge } from "@yundeving/story-book-demo-ui";

<Badge variant="primary"> Badge </Badge>
<Badge variant="secondary"> Badge </Badge>
<Badge variant="success"> Badge </Badge>
<Badge variant="warning"> Badge </Badge>
<Badge variant="info"> Badge </Badge>`}
        />
      </DocumentationSection>

      <DocumentationSection id="size">
        <SectionContent
          preview={
            <>
              <Badge size="sm"> Badge </Badge>
              <Badge size="md"> Badge </Badge>
              <Badge size="lg"> Badge </Badge>
            </>
          }
          code={`import { Badge } from "@yundeving/story-book-demo-ui";

<Badge size="sm"> Badge </Badge>
<Badge size="md"> Badge </Badge>
<Badge size="lg"> Badge </Badge>`}
        />
      </DocumentationSection>
      <DocumentationSection id="long-text">
        <SectionContent
          preview={
            <>
              <Badge size="md"> Long Long Text Badge </Badge>
            </>
          }
          code={`import { Badge } from "@yundeving/story-book-demo-ui";

<Badge size="md"> Long Long Text Badge </Badge>
`}
        />
      </DocumentationSection>
    </DocumentationLayout>
  );
}
