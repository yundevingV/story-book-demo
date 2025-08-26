"use client";

import { cn } from "@yundeving/story-book-demo-ui";

import React from "react";

interface DocumentationSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

function DocumentationSection({
  id,
  children,
  className,
}: DocumentationSectionProps) {
  return (
    <section id={id} className={cn("mb-12 scroll-mt-20", className)}>
      {children}
    </section>
  );
}

export default DocumentationSection;
