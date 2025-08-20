import { cva } from "class-variance-authority";
import { type BadgeProps } from "./Badge.type";
import { cn } from "../../lib/utils";

const badgeStyle = cva(
  `font-medium rounded-lg text-center
  inline-flex items-center justify-center
  whitespace-nowrap`,
  {
    variants: {
      variant: {
        default: "bg-default-500 border-default-500 text-white",
        primary: "bg-primary-500 border-primary-500 text-black",
        secondary: "bg-secondary-500 border-secondary-500 text-black",
        accent: "bg-accent-500 border-accent-500",
        info: "bg-info-500 border-info-500 text-black",
        success: "bg-success-500 border-success-500 text-black",
        warning: "bg-warning-500 border-warning-500 text-black",
        error: "bg-error-500 border-error-500 text-black",
      },
      size: {
        md: "px-4 has-[>svg]:px-3 text-base",
        sm: "px-3 has-[>svg]:px-2.5 text-sm",
        lg: "px-6 has-[>svg]:px-4",
      },
    },
    // 기본값 설정
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const Badge = ({
  children,
  variant,
  size,
  className,
  ...props
}: BadgeProps) => {
  return (
    <div className={cn(badgeStyle({ variant, size }), className)} {...props}>
      {children}
    </div>
  );
};

export default Badge;
