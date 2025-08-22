import React from "react";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { CustomLinkProps } from "./Link.type";

const customLinkStyle = cva(
  `font-medium rounded-lg text-default-200
  transition-all duration-200 ease-in-out cursor-pointer
  [&[aria-disabled=true]]:opacity-50 [&[aria-disabled=true]]:cursor-not-allowed
  bg-default-100 dark:bg-default-800
  `,
  {
    variants: {
      size: {
        md: "p-3",
        sm: "p-1.5",
        lg: "p-5",
      },
    },
  }
);

const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (
    { size = "md", label, className, children, disabled = false, ...props },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      props.onClick?.(e);
    };

    return (
      <Link
        ref={ref}
        data-slot="link"
        className={cn(customLinkStyle({ size }), className)}
        aria-disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        <div className="flex items-center justify-center gap-2">
          {children}
          {label && <span>{label}</span>}
        </div>
      </Link>
    );
  }
);

CustomLink.displayName = "CustomLink";

export default CustomLink;
