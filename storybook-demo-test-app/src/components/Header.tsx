"use client";

import React, { useEffect, useState } from "react";
import { cn, IconButton, Skeleton } from "@yundeving/story-book-demo-ui";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 클라이언트에서만 테마 상태를 확인
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-default-900/80 backdrop-blur-sm border-b border-default-200 dark:border-default-700">
      <div className="flex items-center justify-between px-6 py-3">
        {/* 로고/제목 영역 */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-default-800 dark:text-default-200">
            Story Book Demo
          </h1>
        </div>

        {/* 테마 토글 버튼 */}
        <div className="flex items-center gap-2">
          <IconButton
            size="sm"
            onClick={toggleTheme}
            className={cn(
              "flex items-center gap-2 bg-transparent ",
              "hover:bg-default-200 dark:hover:bg-default-700"
            )}
            icon={
              !mounted ? (
                <Skeleton className="w-10 h-4" />
              ) : isDark ? (
                <FaSun className="text-default-200" />
              ) : (
                <FaMoon className="text-default-800" />
              )
            }
          />
        </div>
      </div>
    </header>
  );
}
