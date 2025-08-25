import { type VariantType, type SizeType } from "../common.type";

export type ButtonStatus = "default" | "loading" | "success" | "error";

export interface ButtonProps extends React.ComponentProps<"button"> {
  label?: string;
  variant?: VariantType;
  size?: SizeType;
  status?: ButtonStatus;
}
