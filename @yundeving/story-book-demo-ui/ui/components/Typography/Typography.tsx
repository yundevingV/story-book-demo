import { cn } from "../../lib/utils";
import React from "react";

const TypographyH1 = ({
  children,
  className,
  ...props
}: React.ComponentProps<"h1">) => {
  return (
    <h1
      className={cn(
        "text-default-700 dark:text-default-200 scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

const TypographyH2 = ({
  children,
  className,
  ...props
}: React.ComponentProps<"h2">) => {
  return (
    <h2
      className={cn(
        "text-default-700 dark:text-default-200 scroll-m-20 text-3xl font-extrabold tracking-tight text-balance",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

const TypographyH3 = ({
  children,
  className,
  ...props
}: React.ComponentProps<"h3">) => {
  return (
    <h3
      className={cn(
        "text-default-700 dark:text-default-200 scroll-m-20 text-2xl font-extrabold tracking-tight text-balance",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

const TypographyH4 = ({
  children,
  className,
  ...props
}: React.ComponentProps<"h4">) => {
  return (
    <h4
      className={cn(
        "text-default-700 dark:text-default-200 scroll-m-20 text-xl font-extrabold tracking-tight text-balance",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
};

const TypographyP = ({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) => {
  return (
    <p
      className={cn(
        "text-default-700 dark:text-default-200 scroll-m-20 text-base font-normal tracking-tight text-balance",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyP };
