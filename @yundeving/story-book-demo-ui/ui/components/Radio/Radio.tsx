import { Tooltip } from "..";
import { cn } from "../../lib/utils";
import { RadioProps } from "./Radio.type";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import { useId } from "react";
import { FaInfoCircle } from "react-icons/fa";

const radioStyles = cva(
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
const radioIndicatorStyles = cva(
  "size-2 rounded-full bg-current transition-all duration-200 ease-in-out",
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
const Radio = ({
  options = [],
  value,
  onValueChange,
  size = "md",
  variant = "default",
  error,
  ...props
}: RadioProps) => {
  const id = useId();

  return (
    <RadioGroup.Root
      value={value}
      className="grid gap-2"
      onValueChange={onValueChange}
      {...props}
    >
      {options.map((option) => {
        const uniqueId = `${id}-${option.value}`;
        return (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroup.Item
              value={option.value}
              id={uniqueId}
              className={cn(
                radioStyles({ size, variant: error ? "error" : variant })
              )}
            >
              <RadioGroup.Indicator className="flex items-center justify-center">
                <div
                  className={cn(
                    radioIndicatorStyles({
                      size,
                      variant: error ? "error" : variant,
                    })
                  )}
                />
              </RadioGroup.Indicator>
            </RadioGroup.Item>
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
    </RadioGroup.Root>
  );
};

export default Radio;
