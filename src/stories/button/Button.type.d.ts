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

interface ButtonProps extends React.ComponentProps<"button"> {
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
}
