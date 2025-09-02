import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { ComponentProps } from "react";

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioProps
  extends ComponentProps<typeof RadioGroupPrimitive.Root> {
  label?: string;
  error?: boolean;
  helperText?: string;
  options?: RadioOption[];
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "success" | "error";
}
