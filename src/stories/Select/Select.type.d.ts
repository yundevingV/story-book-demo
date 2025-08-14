interface SelectProps {
  options: SelectOption[];
  size?: "sm" | "md" | "lg";
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
}

interface SelectContainerProps extends React.ComponentProps<"div"> {
  className?: string;
  size?: "sm" | "md" | "lg";
}

interface SelectTriggerProps extends React.ComponentProps<"button"> {
  isOpen: boolean;
  className?: string;
  error?: boolean;
}

interface SelectValueProps extends React.ComponentProps<"span"> {
  value: string;
}

interface SelectLabelProps extends React.ComponentProps<"div"> {
  className?: string;
}

interface SelectGroupProps extends React.ComponentProps<"div"> {
  isOpen: boolean;
  className?: string;
}

interface SelectItemProps extends React.ComponentProps<"div"> {
  value: string;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
}
