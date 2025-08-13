import { cva } from "class-variance-authority";
import { ComponentProps } from "react";

export interface BadgeProps extends ComponentProps<"div"> {
  variant:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  size: "default" | "sm" | "lg";
}

const badgeStyle = cva(
  `font-medium rounded-lg text-center
  inline-flex items-center justify-center
  whitespace-nowrap`,
  {
    variants: {
      variant: {
        default: "bg-default-500 border-default-500",
        primary: "bg-primary-500 border-primary-500",
        secondary: "bg-secondary-500 border-secondary-500",
        accent: "bg-accent-500 border-accent-500",
        info: "bg-info-500 border-info-500",
        success: "bg-success-500 border-success-500",
        warning: "bg-warning-500 border-warning-500",
        error: "bg-error-500 border-error-500",
      },
      size: {
        default: "px-4 has-[>svg]:px-3 text-base",
        sm: "px-3 has-[>svg]:px-2.5 text-sm",
        lg: "px-6 has-[>svg]:px-4",
      },
    },
    // 기본값 설정
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const Badge = ({ children, variant, size, ...props }: BadgeProps) => {
  return (
    <div className={badgeStyle({ variant, size })} {...props}>
      {children}
    </div>
  );
};
