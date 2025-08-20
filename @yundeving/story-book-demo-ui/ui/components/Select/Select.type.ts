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
}

export interface SelectContainerProps extends React.ComponentProps<"div"> {
  size?: SizeType;
}

export interface SelectTriggerProps extends React.ComponentProps<"button"> {
  isOpen: boolean;
  error?: boolean;
}

export interface SelectValueProps extends React.ComponentProps<"span"> {
  value: string;
}

export interface SelectGroupProps extends React.ComponentProps<"div"> {
  isOpen: boolean;
}

export interface SelectItemProps extends React.ComponentProps<"div"> {
  value: string;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
}
