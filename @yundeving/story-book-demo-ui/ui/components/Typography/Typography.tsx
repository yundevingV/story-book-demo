import { cn } from "../../lib/utils";
import React from "react";

const TypographyH1 = ({
  children,
  className,
  ref,
  ...props
}: React.ComponentProps<"h1">) => {
  return (
    <h1
      ref={ref}
      className={cn(
        "text-default-700 dark:text-default-200 scroll-m-20 text-4xl font-extrabold tracking-tight",
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
  ref,
  ...props
}: React.ComponentProps<"h2">) => {
  return (
    <h2
      ref={ref}
      className={cn(
        "text-default-700 dark:text-default-200 scroll-m-20 text-3xl font-extrabold tracking-tight",
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
  ref,
  ...props
}: React.ComponentProps<"h3">) => {
  return (
    <h3
      ref={ref}
      className={cn(
        "text-default-700 dark:text-default-200 scroll-m-20 text-2xl font-extrabold tracking-tight",
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
  ref,
  ...props
}: React.ComponentProps<"h4">) => {
  return (
    <h4
      ref={ref}
      className={cn(
        "text-default-700 dark:text-default-200 scroll-m-20 text-xl font-extrabold tracking-tight",
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
  ref,
  ...props
}: React.ComponentProps<"p">) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-default-700 dark:text-default-200 scroll-m-20 text-base font-normal tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyP };
