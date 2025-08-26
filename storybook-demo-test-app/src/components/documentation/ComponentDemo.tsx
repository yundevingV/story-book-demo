"use client";

import { Card, CardContent } from "@yundeving/story-book-demo-ui";
import { cn } from "@yundeving/story-book-demo-ui";

import React from "react";

interface ComponentDemoProps {
  children: React.ReactNode;
  className?: string;
}

function ComponentDemo({ children, className }: ComponentDemoProps) {
  return (
    <Card
      className={cn(
        "mb-6 flex min-h-96 flex-col items-center justify-center overflow-y-auto",
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
