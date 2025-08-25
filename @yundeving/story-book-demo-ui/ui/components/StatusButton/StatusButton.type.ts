import { type ButtonProps } from "../Button/Button.type";

export interface StatusButtonProps extends ButtonProps {
  status: "loading" | "success" | "error";
}
