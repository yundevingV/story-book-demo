interface BadgeProps extends React.ComponentProps<"div"> {
  variant:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  size: "default" | "sm" | "lg";
}
