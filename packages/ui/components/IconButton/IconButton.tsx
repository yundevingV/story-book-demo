import React from "react";
import Button from "../Button";
import { type IconButtonProps } from "./IconButton.type";

const IconButton = ({
  icon,
  label,
  variant,
  size,
  state,
  onlyIcon,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <Button
      label={onlyIcon ? "" : label}
      variant={variant}
      size={size}
      state={state}
      className={className}
      {...props}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
