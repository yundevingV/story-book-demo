type ButtonVariant = "main" | "warning" | "error";
type ButtonSize = "small" | "medium" | "large";
type ButtonState = "default" | "loading" | "success" | "error";

type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  className?: string;
  onClick?: () => void;
};
