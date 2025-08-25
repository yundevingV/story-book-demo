"use client";

import React, { useState, useEffect } from "react";
import { Button, Icon } from "@yundeving/story-book-demo-ui";
import { cn } from "@yundeving/story-book-demo-ui";
import { FaCopy, FaCheck } from "react-icons/fa";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  materialLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

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

  const isDark = true;
  return (
    <div className={cn("relative mb-6", className)}>
      <Button
        size="sm"
        variant="default"
        className={cn(
          "absolute top-3 right-3 z-10",
          "bg-white/10 hover:bg-white/20 active:bg-white/30 text-white border-white/20"
        )}
        onClick={handleCopy}
      >
        <Icon icon={copied ? <FaCheck /> : <FaCopy />} />
      </Button>

      <SyntaxHighlighter
        language={language}
        style={isDark ? materialDark : materialLight}
        customStyle={{
          margin: 0,
          borderRadius: "0.5rem",
          minHeight: "24rem", // min-h-96
          lineHeight: "1.5",
        }}
        codeTagProps={{
          style: {
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
