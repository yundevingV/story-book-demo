"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, Button, Icon } from "@yundeving/story-book-demo-ui";
import { cn } from "@yundeving/story-book-demo-ui";
import { FaCopy, FaCheck } from "react-icons/fa";

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
}

function CodeBlock({ children, language = "tsx", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // copied 상태가 true가 되면 2초 후 false로 변경
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);

      // cleanup function으로 타이머 정리
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <Card
      className={cn(
        "bg-default-200 dark:bg-default-900 h-96 mb-6 overflow-y-auto",
        className
      )}
    >
      <CardContent className="p-0 relative">
        <Button
          size="sm"
          variant="default"
          className={cn(
            "absolute top-3 right-3 z-10",
            "bg-transparent hover:bg-transparent active:bg-transparent"
          )}
          onClick={handleCopy}
        >
          <Icon icon={copied ? <FaCheck /> : <FaCopy />} />
        </Button>
        <pre className="p-4 overflow-x-auto  text-default-100 text-sm leading-relaxed">
          <code className={`language-${language}`}>{children}</code>
        </pre>
      </CardContent>
    </Card>
  );
}

export default CodeBlock;
