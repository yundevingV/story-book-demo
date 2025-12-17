import { cn } from "../../lib/utils";
import { TypographyP } from "../Typography";
import { type InputProps } from "./Input.type";
import { cva } from "class-variance-authority";

const inputStyle = cva(
  `border border-1 border-default-400 flex w-full min-w-0 h-9 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-none 
  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]
  disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
  text-base light:text-black dark:text-white
  placeholder:text-default-500  
  `,
  {
    variants: {
      variant: {
        default: "bg-transparent",
        filled:
          "bg-default-50 border-default-200 dark:bg-default-900 dark:border-default-700",
        outline: "bg-transparent border-2",
      },
      type: {
        text: "",
        password: "",
        email: "",
        number: "",
        file: "text-sm cursor-pointer light:text-default-300 dark:text-default-300 file:cursor-pointer file:text-white file:inline-flex file:h-7 file:bg-transparent file:text-sm file:font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      type: "text",
    },
  }
);

const Input = ({
  className,
  variant = "default",
  placeholder,
  error,
  helperText,
  type,
  ref,
  ...props
}: InputProps) => {
  return (
    <div className="w-full">
      <input
        ref={ref}
        placeholder={placeholder ?? "placeholder"}
        type={type}
        data-slot="input"
        className={cn(
          inputStyle({ variant, type }),
          error && "border-error-500 ring-error-500/20",
          className
        )}
        {...props}
      />
      {helperText && (
        <TypographyP
          className={cn(
            "mt-1 text-sm",
            error ? "text-error-500" : "text-default-300"
          )}
        >
          {helperText}
        </TypographyP>
      )}
    </div>
  );
};

export default Input;
