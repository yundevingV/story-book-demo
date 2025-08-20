import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";
import { type DividerProps } from "./Divider.type";

const dividerStyle = cva("w-full h-0.5", {
  variants: {
    variant: {
      default: "bg-default-200",
      primary: "bg-primary-500",
      secondary: "bg-secondary-200",
      accent: "bg-accent-200",
      info: "bg-info-200",
      success: "bg-success-200",
      warning: "bg-warning-200",
      error: "bg-error-200",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Divider = ({ variant, className, ...props }: DividerProps) => {
  return (
    <div className={cn(dividerStyle({ variant }), className)} {...props} />
  );
};

export default Divider;
