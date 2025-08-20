import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "../Button";
import { PiSpinnerBold } from "react-icons/pi";
import { BiSolidError } from "react-icons/bi";
import { type StatusButtonProps } from "./StatusButton.type";

const StatusButton = ({
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

export default StatusButton;
