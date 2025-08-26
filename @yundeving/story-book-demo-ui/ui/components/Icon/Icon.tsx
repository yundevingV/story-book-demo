import cx from "classnames";

import React from "react";

export interface IconProps {
  icon: React.ReactNode;
  className?: string;
}

const Icon = ({ icon, className }: IconProps) => {
  return <div className={cx("", className)}>{icon}</div>;
};

export default Icon;
