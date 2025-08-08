import { Button } from "../Button/Button";

export const IconButton = ({
  icon,
  label,
  variant,
  size,
  state,
  onlyIcon,
  ...props
}: IconButtonProps) => {
  return (
    <Button
      label={onlyIcon ? "" : label}
      variant={variant}
      size={size}
      state={state}
      {...props}
    >
      {icon}
    </Button>
  );
};
