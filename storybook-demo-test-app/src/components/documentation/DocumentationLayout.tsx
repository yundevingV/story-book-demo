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
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      {(title || description) && (
        <div className="mb-8">
          {title && (
            <h1 className="text-2xl font-bold text-default-800 dark:text-default-200 mb-4">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-base text-default-600 dark:text-default-400 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex gap-8">
        {/* Main Content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}

export default DocumentationLayout;
