"use client";

import React from "react";
import { cn } from "../../lib/utils";
import { type LabelProps } from "./Label.type";

const Label = ({ className, ...props }: LabelProps) => {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        "text-default-700 dark:text-default-300",
        className
      )}
      {...props}
    />
  );
};

export default Label;
