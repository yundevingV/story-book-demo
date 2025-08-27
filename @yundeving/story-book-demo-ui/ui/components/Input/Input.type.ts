export interface InputProps extends React.ComponentProps<"input"> {
  variant?: "default" | "filled" | "outline";
  error?: boolean;
  helperText?: string;
  type?: "text" | "email" | "password" | "file";
  ref?: React.Ref<HTMLInputElement>;
}
