import { cn } from "../../lib/utils";
import type { LinkProps } from "./Link.type";
import { cva } from "class-variance-authority";
import React from "react";

const LinkStyle = cva(
  `font-medium rounded-lg text-default-200
  transition-all duration-200 ease-in-out cursor-pointer
  [&[aria-disabled=true]]:opacity-50 [&[aria-disabled=true]]:cursor-not-allowed
  bg-default-100 dark:bg-default-800 inline-block
  `,
  {
    variants: {
      size: {
        md: "p-2",
        sm: "p-1",
        lg: "p-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const Link = ({
  size,
  label,
  className,
  children,
  disabled = false,
  onClick,
  ref,
  ...props
}: LinkProps) => {
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
    <a
      ref={ref}
      data-slot="link"
      className={cn(LinkStyle({ size }), className)}
      aria-disabled={disabled}
      onClick={handleClick}
      tabIndex={disabled ? -1 : undefined}
      {...props}
      href={disabled ? undefined : props.href}
    >
      <div className="flex items-center justify-center gap-2">
        {children}
        {label && <span className="truncate">{label}</span>}
      </div>
    </a>
  );
};

export default Link;
