import type { LinkProps } from "next/link";
import { SizeType } from "../common.type";

export interface CustomLinkProps extends LinkProps {
  size?: SizeType;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}
