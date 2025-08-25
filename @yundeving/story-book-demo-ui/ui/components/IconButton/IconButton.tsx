import Button from "../Button";
import { type IconButtonProps } from "./IconButton.type";

const IconButton = ({
  icon,
  label,
  variant,
  size,
  status,
  onlyIcon,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <Button
      label={onlyIcon ? "" : label}
      variant={variant}
      size={size}
      status={status}
      className={className}
      {...props}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
