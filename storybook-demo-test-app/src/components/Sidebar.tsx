"use client";

import { Button, cn } from "@yundeving/story-book-demo-ui";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <div className="flex h-screen w-64">
      {/* Sidebar */}
      <div className={`bg-default-800 shadow-lg w-64 p-4 flex flex-col gap-4`}>
        {/* Navigation Items */}
        <nav className="mt-4 flex flex-col gap-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Button
                key={item.href}
                className={cn(
                  "w-fit bg-transparent",
                  isActive && "bg-default-900"
                )}
              >
                <p onClick={() => router.push(item.href)}>{item.name}</p>
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
