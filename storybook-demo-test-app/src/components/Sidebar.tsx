"use client";

import { cn, Link } from "@yundeving/story-book-demo-ui";

import { usePathname } from "next/navigation";

interface SidebarItem {
  name: string;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  { name: "Overview", href: "/" },
  { name: "Button", href: "/button" },
  { name: "Badge", href: "/badge" },
  { name: "Card", href: "/card" },
  { name: "Input", href: "/input" },
  { name: "Select", href: "/select" },
  { name: "IconButton", href: "/icon-button" },
  { name: "Tooltip", href: "/tooltip" },
  { name: "Skeleton", href: "/skeleton" },
  { name: "StatusButton", href: "/status-button" },
  { name: "Divider", href: "/divider" },
  { name: "Label", href: "/label" },
  { name: "Icon", href: "/icon" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen w-64 bg-default-200 dark:bg-default-800 shadow-lg p-4 flex flex-col gap-4 overflow-y-auto">
      {/* Sidebar */}
      {/* Navigation Items */}
      <nav className="mt-4 flex flex-col gap-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              href={item.href}
              key={item.href}
              className={cn(
                "w-fit bg-transparent h-9 px-4 inline-flex items-center justify-center font-medium rounded-lg  transition-all duration-200 ease-in-out",
                "text-default-800 dark:text-default-200",
                isActive && "bg-default-300 dark:bg-default-700"
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
