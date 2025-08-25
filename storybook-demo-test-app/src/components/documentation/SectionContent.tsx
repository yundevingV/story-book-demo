import { useState } from "react";
import { Button, cn } from "@yundeving/story-book-demo-ui";
import CodeBlock from "./CodeBlock";
import ComponentDemo from "./ComponentDemo";

interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  preview: React.ReactNode;
  code: string;
  children?: React.ReactNode;
}

function SectionContent({ preview, code, children }: SectionContentProps) {
  const [isPreview, setIsPreview] = useState<boolean>(true);

  const handlePreview = () => {
    setIsPreview(true);
  };

  const handleCodeView = () => {
    setIsPreview(false);
  };

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
            onClick={handlePreview}
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
            onClick={handleCodeView}
          >
            Code
          </Button>
        </div>
        {isPreview && (
          <div className="flex flex-col gap-4">
            <ComponentDemo>{preview}</ComponentDemo>
          </div>
        )}
        {!isPreview && (
          <div className="flex flex-col gap-4">
            <CodeBlock language="tsx">{code}</CodeBlock>
          </div>
        )}
      </div>
    </div>
  );
}

export { SectionContent };
export default SectionContent;
