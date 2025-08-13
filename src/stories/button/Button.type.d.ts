type ButtonState = "default" | "loading" | "success" | "error";

interface ButtonProps extends React.ComponentProps<"button"> {
  label?: string;
  variant?: VariantType;
  size?: SizeType;
  state?: ButtonState;
}
