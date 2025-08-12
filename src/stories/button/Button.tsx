import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyle = cva(
  `font-medium rounded-lg
  transition-all duration-200 ease-in-out cursor-pointer
  disabled:opacity-50 disabled:cursor-not-allowed
  `,
  {
    variants: {
      variant: {
        main: "bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-900",
        yellow:
          "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white",
        amber: "bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white",
        red: "bg-red-500 hover:bg-red-600 active:bg-red-700 text-white",
        blue: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white",
        green: "bg-green-500 hover:bg-green-600 active:bg-green-700 text-white",
        purple:
          "bg-purple-500 hover:bg-purple-600 active:bg-purple-700 text-white",
        sky: "bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white",
        gray: "bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white",
        black: "bg-black hover:bg-black/80 active:bg-black/90 text-white",
        white: "bg-white hover:bg-white/80 active:bg-white/90 text-black",
      },
      size: {
        small: "px-3 py-1.5 text-sm h-8 gap-x-1",
        medium: "px-4 py-2 text-base h-10 gap-x-1.5",
        large: "px-6 py-3 text-lg h-12 gap-x-2",
      },
    },
    // 기본값 설정
    defaultVariants: {
      variant: "main",
      size: "medium",
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
        {label}
      </div>
    </button>
  );
};
