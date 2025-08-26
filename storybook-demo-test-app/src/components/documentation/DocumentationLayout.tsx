"use client";

import React from "react";

interface DocumentationLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

function DocumentationLayout({
  children,
  title,
  description,
}: DocumentationLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Page Header */}
      {(title || description) && (
        <div className="mb-8">
          {title && (
            <h1 className="text-default-800 dark:text-default-200 mb-4 text-2xl font-bold">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-default-600 dark:text-default-400 text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex gap-8">
        {/* Main Content */}
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}

export default DocumentationLayout;
