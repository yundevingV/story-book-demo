import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { ComponentProps } from "react";

export interface RadioGroupOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps
  extends ComponentProps<typeof RadioGroupPrimitive.Root> {
  label?: string;
  error?: boolean;
  helperText?: string;
  options?: RadioGroupOption[];
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "success" | "error";
}
