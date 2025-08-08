import cx from "classnames";

export interface IconProps {
  icon: React.ReactNode;
  className?: string;
}

export const Icon = ({ icon, className }: IconProps) => {
  return <div className={cx("", className)}>{icon}</div>;
};
