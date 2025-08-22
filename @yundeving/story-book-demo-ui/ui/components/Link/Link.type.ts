import type { LinkProps } from "next/link";
import { SizeType } from "../common.type";

export interface CustomLinkProps extends LinkProps {
  size?: SizeType;
  label?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}
