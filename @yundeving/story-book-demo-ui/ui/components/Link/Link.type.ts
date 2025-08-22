import type { AnchorHTMLAttributes } from "react";
import { SizeType } from "../common.type";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: SizeType;
  label?: string;
  disabled?: boolean;
}
