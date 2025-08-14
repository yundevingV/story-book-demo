interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  size?: "sm" | "md" | "lg";
  delay?: number;
  isArrow?: boolean;
  className?: string;
}
