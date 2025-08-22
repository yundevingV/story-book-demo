import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { CustomLinkProps } from "./Link.type";

const customLinkStyle = cva(
  `font-medium rounded-lg text-default-200
  transition-all duration-200 ease-in-out cursor-pointer
  disabled:opacity-50 disabled:cursor-not-allowed
  bg-default-100 dark:bg-default-800 items-center
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

const CustomLink = ({
  size = "md",
  label,
  className,
  children,
  ...props
}: CustomLinkProps) => {
  return (
    <Link
      data-slot="link"
      className={cn(customLinkStyle({ size: size }), className)}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {children}
        {label && <span>{label}</span>}
      </div>
    </Link>
  );
};

export default CustomLink;
