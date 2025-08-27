import { type SizeType } from "../common.type";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  selected?: boolean;
}

export interface SelectProps<T extends SelectOption = SelectOption> {
  options: T[];
  size?: SizeType;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  ref?: React.Ref<HTMLDivElement>;
}

export interface SelectContainerProps extends React.ComponentProps<"div"> {
  size?: SizeType;
  ref?: React.Ref<HTMLDivElement>;
}

export interface SelectTriggerProps extends React.ComponentProps<"button"> {
  isOpen: boolean;
  error?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

export interface SelectValueProps extends React.ComponentProps<"span"> {
  value: string;
  ref?: React.Ref<HTMLSpanElement>;
}

export interface SelectGroupProps extends React.ComponentProps<"div"> {
  isOpen: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

export interface SelectItemProps extends React.ComponentProps<"div"> {
  value: string;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
  ref?: React.Ref<HTMLDivElement>;
}
