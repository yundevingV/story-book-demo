import { cn } from "@/lib/utils";

export const Skeleton = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-default-400 dark:bg-default-600 animate-pulse rounded-md",
        className
      )}
      {...props}
    />
  );
};
