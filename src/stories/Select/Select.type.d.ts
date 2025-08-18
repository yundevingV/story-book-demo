interface SelectProps {
  options: SelectOption[];
  size?: SizeType;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

interface SelectContainerProps extends React.ComponentProps<"div"> {
  size?: SizeType;
}

interface SelectTriggerProps extends React.ComponentProps<"button"> {
  isOpen: boolean;
  error?: boolean;
}

interface SelectValueProps extends React.ComponentProps<"span"> {
  value: string;
}

// interface SelectLabelProps extends React.ComponentProps<"div"> {}

interface SelectGroupProps extends React.ComponentProps<"div"> {
  isOpen: boolean;
}

interface SelectItemProps extends React.ComponentProps<"div"> {
  value: string;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
}
