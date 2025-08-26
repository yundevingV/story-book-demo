import React from "react";

import { type SizeType, type VariantType } from "../common.type";

export interface BadgeProps extends React.ComponentProps<"div"> {
  variant?: VariantType;
  size?: SizeType;
}
