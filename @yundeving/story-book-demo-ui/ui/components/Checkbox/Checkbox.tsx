import { cn } from "../../lib/utils";
import { TypographyP } from "../Typography";
import { CheckboxProps } from "./Checkbox.type";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva } from "class-variance-authority";
import { FaCheck, FaMinus } from "react-icons/fa";

const checkboxStyles = cva(
  `peer shrink-0 rounded-sm  
   ring-offset-background focus-visible:outline-none focus-visible:ring-2 
   focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed 
   disabled:opacity-50 transition-colors duration-200 ease-in-out
   `,
  {
    variants: {
      size: {
        sm: "size-3",
        md: "size-4",
        lg: "size-5",
      },
      variant: {
        default: `
          border border-default-800 dark:border-default-50
          data-[state=checked]:bg-default-800 text-white
          dark:data-[state=checked]:bg-default-50 dark:text-black
        `,
        primary: `
          border border-primary-500 dark:border-primary-300
          data-[state=checked]:bg-primary-500 text-white
          dark:data-[state=checked]:bg-primary-300 dark:text-black
        `,
        success: `
          border border-success-500 dark:border-success-300
          data-[state=checked]:bg-success-500 text-white
          dark:data-[state=checked]:bg-success-300 dark:text-black
        `,
        error: `
          border border-error-500 dark:border-error-300
          data-[state=checked]:bg-error-500 text-white
          dark:data-[state=checked]:bg-error-300 dark:text-black
        `,
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);
const checkboxIconStyles = cva("transition-all duration-200 ease-in-out", {
  variants: {
    size: {
      sm: "size-2",
      md: "size-3",
      lg: "size-4",
    },
    variant: {
      indeterminate: "text-default-800 dark:text-default-50",
      checked: "text-default-50 dark:text-default-800",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "checked",
  },
});

const Checkbox = ({
  label,
  description,
  size = "md",
  variant = "default",
  error,
  helperText,
  className,
  ...props
}: CheckboxProps) => {
  return (
    <div className="flex items-start space-x-2">
      <CheckboxPrimitive.Root
        id={props.id}
        className={cn(
          checkboxStyles({ size, variant: error ? "error" : variant }),
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
          {props.checked === "indeterminate" ? (
            <FaMinus
              className={cn(
                checkboxIconStyles({ size, variant: "indeterminate" })
              )}
            />
          ) : (
            <FaCheck
              className={cn(checkboxIconStyles({ size, variant: "checked" }))}
            />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {(label || description || helperText) && (
        <div className="flex flex-col">
          {label && (
            <label
              htmlFor={props.id}
              className={cn(
                "text-default-800 dark:text-default-50 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                props.disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <TypographyP className="text-default-700 dark:text-default-300 text-sm">
              {description}
            </TypographyP>
          )}
          {helperText && (
            <TypographyP
              className={cn(
                "mt-1 text-xs",
                error
                  ? "text-error-600 dark:text-error-300"
                  : "text-default-600 dark:text-default-300"
              )}
            >
              {helperText}
            </TypographyP>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
