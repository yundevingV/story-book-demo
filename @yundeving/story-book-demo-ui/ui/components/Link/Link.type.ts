import { SizeType } from "../common.type";
import type { AnchorHTMLAttributes } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: SizeType;
  label?: string;
  disabled?: boolean;
  ref?: React.Ref<HTMLAnchorElement>;
}
