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
    <Card
      className={cn(
        "min-h-96 mb-6 overflow-y-auto flex flex-col items-center justify-center",
        className
      )}
    >
      <CardContent>
        <div className="flex flex-wrap items-center gap-4">{children}</div>
      </CardContent>
    </Card>
  );
}

export default ComponentDemo;
