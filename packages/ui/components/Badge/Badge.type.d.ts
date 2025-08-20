import { type VariantType, type SizeType } from "../common.type";

export interface BadgeProps extends React.ComponentProps<"div"> {
  variant: VariantType;
  size: SizeType;
}
