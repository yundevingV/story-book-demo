"use client";
import { usePathname } from "next/navigation";

import { Link, cn } from "@yundeving/story-book-demo-ui";


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
    <div className="bg-default-200 dark:bg-default-800 flex h-screen w-64 flex-col gap-4 overflow-y-auto p-4 shadow-lg">
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
                "inline-flex h-9 w-full items-center justify-start rounded-lg bg-transparent px-4 font-medium transition-all duration-200 ease-in-out",
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
