import { type SizeType, type VariantType } from "../common.type";
import { type ReactNode } from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  label?: string;
  variant?: VariantType | "ghost";
  size?: SizeType;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
