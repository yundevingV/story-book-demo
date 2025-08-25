import { FaCheck } from "react-icons/fa";
import Button from "../Button";
import { PiSpinnerBold } from "react-icons/pi";
import { BiSolidError } from "react-icons/bi";
import { type StatusButtonProps } from "./StatusButton.type";

const StatusButton = ({
  label,
  variant,
  size,
  status,
  ...props
}: StatusButtonProps) => {
  return (
    <Button
      label={label}
      variant={variant}
      size={size}
      status={status}
      {...props}
    >
      {status === "loading" && <PiSpinnerBold className="animate-spin" />}
      {status === "success" && <FaCheck />}
      {status === "error" && <BiSolidError />}
    </Button>
  );
};

export default StatusButton;
