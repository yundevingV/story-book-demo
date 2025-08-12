type ButtonVariant =
  | "main"
  | "amber"
  | "yellow"
  | "red"
  | "blue"
  | "green"
  | "purple"
  | "sky"
  | "gray"
  | "black"
  | "white";
type ButtonSize = "small" | "medium" | "large";
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
