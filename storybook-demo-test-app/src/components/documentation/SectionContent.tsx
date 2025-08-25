import { useState } from "react";
import { Button, cn } from "@yundeving/story-book-demo-ui";
import CodeBlock from "./CodeBlock";
import ComponentDemo from "./ComponentDemo";

interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  preview: React.ReactNode;
  code: string;
}

function SectionContent({ preview, code }: SectionContentProps) {
  const [isPreview, setIsPreview] = useState(true);

  return (
    <div className="flex-1 min-w-0 mt-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Button
            className={cn(
              "bg-transparent hover:bg-transparent active:bg-transparent p-0 ",
              isPreview
                ? "text-default-600 dark:text-default-200"
                : "text-default-200 dark:text-default-600"
            )}
            onClick={() => setIsPreview(true)}
          >
            Preview
          </Button>
          <Button
            className={cn(
              "bg-transparent hover:bg-transparent active:bg-transparent p-0",
              !isPreview
                ? "text-default-600 dark:text-default-200"
                : "text-default-200 dark:text-default-600"
            )}
            onClick={() => setIsPreview(false)}
          >
            Code
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {isPreview ? (
            <ComponentDemo>{preview}</ComponentDemo>
          ) : (
            <CodeBlock language="tsx">{code}</CodeBlock>
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionContent;
