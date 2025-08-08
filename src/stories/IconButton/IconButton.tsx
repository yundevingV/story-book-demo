import { Button } from "../Button/Button";

export const IconButton = ({
  icon,
  label,
  variant,
  size,
  state,
  ...props
}: IconButtonProps) => {
  return (
    <Button
      label={label}
      variant={variant}
      size={size}
      state={state}
      {...props}
    >
      {icon}
    </Button>
  );
};
