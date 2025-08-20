import { type ButtonProps } from "../Button/Button.type";

export interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
  onlyIcon?: boolean;
}
