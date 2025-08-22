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
        md: "p-2",
        sm: "p-1",
        lg: "p-3",
      },
    },
  }
);

const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (
    {
      size = "md",
      label,
      className,
      children,
      disabled = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        onClick?.(e);
      },
      [disabled, onClick]
    );

    return (
      <Link
        ref={ref}
        data-slot="link"
        className={cn(customLinkStyle({ size }), className)}
        aria-disabled={disabled}
        onClick={handleClick}
        tabIndex={disabled ? -1 : undefined}
        {...props}
      >
        <div className="flex items-center justify-center gap-2">
          {children}
          {label && <span className="truncate">{label}</span>}
        </div>
      </Link>
    );
  }
);

CustomLink.displayName = "CustomLink";

export default CustomLink;
