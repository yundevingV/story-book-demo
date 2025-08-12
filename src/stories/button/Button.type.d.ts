type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";
type ButtonSize = "default" | "sm" | "lg";
type ButtonState = "default" | "loading" | "success" | "error";

interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
