import { FaCheck } from "react-icons/fa";
import { Button } from "../Button/Button";
import { PiSpinnerBold } from "react-icons/pi";
import { BiSolidError } from "react-icons/bi";

export const StatusButton = ({
  label,
  variant,
  size,
  state,
  ...props
}: StatusButtonProps) => {
  return (
    <Button
      label={label}
      variant={variant}
      size={size}
      state={state}
      {...props}
    >
      {state === "loading" && <PiSpinnerBold className="animate-spin" />}
      {state === "success" && <FaCheck />}
      {state === "error" && <BiSolidError />}
    </Button>
  );
};
