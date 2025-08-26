import { type SizeType, type VariantType } from "../common.type";

export type ButtonStatus = "default" | "loading" | "success" | "error";

export interface ButtonProps extends React.ComponentProps<"button"> {
  label?: string;
  variant?: VariantType | "ghost";
  size?: SizeType;
  status?: ButtonStatus;
}
