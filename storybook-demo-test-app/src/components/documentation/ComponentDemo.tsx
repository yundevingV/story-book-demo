"use client";

import React from "react";
import { Card, CardContent } from "@yundeving/story-book-demo-ui";
import { cn } from "@yundeving/story-book-demo-ui";

interface ComponentDemoProps {
  children: React.ReactNode;
  className?: string;
}

function ComponentDemo({ children, className }: ComponentDemoProps) {
  return (
    <Card className={cn("mb-6 h-96 overflow-y-auto", className)}>
      <CardContent className="p-6 items-center h-full flex justify-center">
        <div className="flex flex-wrap items-center gap-4">{children}</div>
      </CardContent>
    </Card>
  );
}

export { ComponentDemo };
export default ComponentDemo;
