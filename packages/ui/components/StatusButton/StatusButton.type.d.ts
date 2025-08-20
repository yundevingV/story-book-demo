import { type ButtonProps } from "../Button/Button.type";

export interface StatusButtonProps extends ButtonProps {
  state: "loading" | "success" | "error";
}
