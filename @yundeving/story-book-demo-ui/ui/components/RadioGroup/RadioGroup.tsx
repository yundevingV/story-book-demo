import { Tooltip } from "..";
import { cn } from "../../lib/utils";
import { RadioGroupProps } from "./RadioGroup.type";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import { useId } from "react";
import { FaInfoCircle } from "react-icons/fa";

const radioGroupStyles = cva(
  "peer rounded-full border text-default-800 dark:text-default-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out",
  {
    variants: {
      size: {
        sm: "size-3",
        md: "size-4",
        lg: "size-5",
      },
      variant: {
        default: "border-default-800 dark:border-default-400",
        primary: "border-primary-700 dark:border-primary-400",
        success: "border-success-700 dark:border-success-400",
        error: "border-error-700 dark:border-error-400",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);
const radioGroupIndicatorStyles = cva(
  "size-2 rounded-full transition-all duration-200 ease-in-out",
  {
    variants: {
      size: {
        sm: "size-1",
        md: "size-2",
        lg: "size-3",
      },
      variant: {
        default: "bg-default-800 dark:bg-default-400",
        primary: "bg-primary-700 dark:bg-primary-400",
        success: "bg-success-700 dark:bg-success-400",
        error: "bg-error-700 dark:bg-error-400",
      },
    },
  }
);
const RadioGroup = ({
  options = [],
  value,
  onValueChange,
  size = "md",
  variant = "default",
  error,
  className,
  ref,
  ...props
}: RadioGroupProps) => {
  const id = useId();

  return (
    <RadioGroupPrimitive.Root
      value={value}
      className={cn("grid gap-2", className)}
      onValueChange={onValueChange}
      ref={ref}
      {...props}
    >
      {options.map((option) => {
        const uniqueId = `${id}-${option.value}`;
        return (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupPrimitive.Item
              value={option.value}
              id={uniqueId}
              disabled={option.disabled}
              className={cn(
                radioGroupStyles({ size, variant: error ? "error" : variant })
              )}
            >
              <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <div
                  className={cn(
                    radioGroupIndicatorStyles({
                      size,
                      variant: error ? "error" : variant,
                    })
                  )}
                />
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
            <label
              htmlFor={uniqueId}
              className="text-default-800 dark:text-default-200 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.label}
            </label>
            {option.description && (
              <Tooltip content={option.description}>
                <FaInfoCircle className="text-default-700 dark:text-default-300 text-sm" />
              </Tooltip>
            )}
          </div>
        );
      })}
    </RadioGroupPrimitive.Root>
  );
};

export default RadioGroup;
