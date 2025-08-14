"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const tooltipStyle = cva(
  `absolute z-50 px-2 py-1 text-white bg-default-900 rounded-md shadow-lg
   transition-opacity duration-200 pointer-events-none
   text-center whitespace-nowrap`,
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
      position: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
    },
    defaultVariants: {
      size: "md",
      position: "top",
    },
  }
);

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      position = "top",
      size = "md",
      delay = 300,
      isArrow = true,
      className,
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const showTooltip = () => {
      timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
    };

    const hideTooltip = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsVisible(false);
    };

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    const formatContent = (text: string) => {
      return text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.split("\n").length - 1 && <br />}
        </React.Fragment>
      ));
    };

    return (
      <div
        ref={ref}
        className="relative inline-block"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
        {isVisible && (
          <div
            className={cn(
              tooltipStyle({ position, size }),
              "animate-in fade-in-0 zoom-in-95",
              className
            )}
            role="tooltip"
          >
            {formatContent(content)}
            {/* 화살표 */}
            {isArrow && (
              <div
                className={cn(
                  "absolute w-2 h-2 bg-default-900 rotate-45",
                  position === "top" &&
                    "top-full left-1/2 -translate-x-1/2 -mt-1",
                  position === "bottom" &&
                    "bottom-full left-1/2 -translate-x-1/2 -mb-1",
                  position === "left" &&
                    "left-full top-1/2 -translate-y-1/2 -ml-1",
                  position === "right" &&
                    "right-full top-1/2 -translate-y-1/2 -mr-1"
                )}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";
