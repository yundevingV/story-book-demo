export interface ButtonProps {
  /** What background color to use */
  backgroundColor?: string;
  /** Button contents */
  label: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Variant of the button */
  variant?: "main" | "warning" | "error";
  /** Optional click handler */
  onClick?: () => void;
}

export const Button = ({
  backgroundColor,
  label,
  size = "medium",
  variant = "main",
  ...props
}: ButtonProps) => {
  // 버튼 크기
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // 버튼 스타일
  const variantClasses = {
    main: "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-500 ",
    warning:
      "bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-500",
    error:
      "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-500",
  };

  // Custom 배경색 적용
  const customStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <button
      type="button"
      className={`
        font-medium rounded-lg
        transition-all duration-200 ease-in-out cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${variantClasses[variant]}
      `}
      style={customStyle}
      {...props}
    >
      {label}
    </button>
  );
};
