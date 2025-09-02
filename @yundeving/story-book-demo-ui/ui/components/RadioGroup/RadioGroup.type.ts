import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { ComponentProps } from "react";

export interface RadioProps
  extends ComponentProps<typeof RadioGroupPrimitive.Root> {
  label?: string;
  error?: boolean;
  helperText?: string;
  options?: { value: string; label: string; description?: string }[];
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "success" | "error";
}
