import { FiLoader, FiCheck, FiX } from "react-icons/fi";
import cx from "classnames";
import { cva } from "class-variance-authority";

const buttonStyle = cva(
  `font-medium rounded-lg
  transition-all duration-200 ease-in-out cursor-pointer
  disabled:opacity-50 disabled:cursor-not-allowed,
  `,
  {
    variants: {
      variant: {
        main: "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-500",
        warning:
          "bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-500",
        error:
          "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-500",
      },
      size: {
        small: "px-3 py-1.5 text-sm h-8 gap-x-1",
        medium: "px-4 py-2 text-base h-10 gap-x-1.5",
        large: "px-6 py-3 text-lg h-12 gap-x-2",
      },
    },
  }
);

export const Button = ({
  label,
  size = "medium",
  variant = "main",
  state = "default",
  className,
  ...props
}: ButtonProps) => {
  // 상태별 아이콘
  const getIcon = () => {
    switch (state) {
      case "loading":
        return <FiLoader className="animate-spin -ml-1 mr-2 h-4 w-4" />;
      case "success":
        return <FiCheck className="w-4 h-4 mr-2" />;
      case "error":
        return <FiX className="w-4 h-4 mr-2" />;
      default:
        return null;
    }
  };

  // 상태별 비활성화
  const isDisabled = state === "loading";

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={cx(buttonStyle({ size, variant }), className)}
      {...props}
    >
      <div className="flex items-center justify-center">
        {getIcon()}
        {label}
      </div>
    </button>
  );
};
