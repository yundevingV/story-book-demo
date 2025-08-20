import React from "react";
import { type VariantType } from "../common.type";

export interface DividerProps extends React.ComponentProps<"div"> {
  variant?: VariantType;
}
