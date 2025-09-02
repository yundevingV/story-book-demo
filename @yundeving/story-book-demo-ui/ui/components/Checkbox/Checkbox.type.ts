import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { ComponentProps } from "react";

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxPrimitive.Root> {
  label?: string;
  description?: string;
  error?: boolean;
  helperText?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "success" | "error";
}
