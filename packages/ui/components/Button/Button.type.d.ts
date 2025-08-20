import { type VariantType, type SizeType } from "../common.type";

export type ButtonState = "default" | "loading" | "success" | "error";

export interface ButtonProps extends React.ComponentProps<"button"> {
  label?: string;
  variant?: VariantType;
  size?: SizeType;
  state?: ButtonState;
}
