import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyle = cva(
  `font-medium rounded-lg text-default-200
  transition-all duration-200 ease-in-out cursor-pointer
  disabled:opacity-50 disabled:cursor-not-allowed
  `,
  {
    variants: {
      variant: {
        default:
          "bg-default-500 hover:bg-default-600 active:bg-default-700 border-default-500 ",
        primary:
          "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white border-primary-500",
        secondary:
          "bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 text-white border-secondary-500",
        accent:
          "bg-accent-500 hover:bg-accent-600 active:bg-accent-700 text-white border-accent-500",
        info: "bg-info-500 hover:bg-info-600 active:bg-info-700 text-white border-info-500",
        success:
          "bg-success-500 hover:bg-success-600 active:bg-success-700 text-white border-success-500",
        warning:
          "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-white border-warning-500",
        error:
          "bg-error-500 hover:bg-error-600 active:bg-error-700 text-white border-error-500",
      },
      size: {
        md: "h-9 px-4 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      },
    },
    // 기본값 설정
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export const Button = ({
  label,
  size,
  variant,
  state,
  className,
  children,
  ...props
}: ButtonProps) => {
  // 상태별 비활성화
  const isDisabled = state === "loading";

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={cn(buttonStyle({ size, variant }), className)}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {children}
        {label && <span className="truncate">{label}</span>}
      </div>
    </button>
  );
};
