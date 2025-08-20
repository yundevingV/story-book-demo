"use client";

import React from "react";
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";
import { FaCheck, FaChevronDown } from "react-icons/fa";

import type {
  SelectOption,
  SelectProps,
  SelectContainerProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectGroupProps,
  SelectItemProps,
} from "./Select.type";

// Select 컴포넌트 (메인 컨테이너)
const Select = React.forwardRef<HTMLDivElement, SelectProps<SelectOption>>(
  ({ options, size, placeholder, error, label, value, onChange }, ref) => {
    const containerStyle = cva("relative", {
      variants: {
        size: {
          sm: "w-40",
          md: "w-80",
          lg: "w-120",
        },
      },
      defaultVariants: {
        size: "md",
      },
    });

    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(value || "");
    const selectRef = React.useRef<HTMLDivElement>(null);

    // 외부 클릭 시 닫기
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          selectRef.current &&
          !selectRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
      setSelectedValue(optionValue);
      onChange?.(optionValue);
      setIsOpen(false);
    };

    const selectedOption = options.find((opt) => opt.value === selectedValue);

    return (
      <>
        {/* Select 컨테이너 */}
        <SelectContainer ref={ref} className={containerStyle({ size })}>
          {/* Trigger (버튼) */}
          <SelectTrigger
            isOpen={isOpen}
            error={error}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Value (선택된 값 표시) */}
            <SelectValue value={selectedOption?.label || placeholder || ""} />
          </SelectTrigger>

          {/* Group (드롭다운 메뉴) */}

          <SelectGroup isOpen={isOpen}>
            {label && <SelectLabel>{label}</SelectLabel>}
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                selected={selectedValue === option.value}
                disabled={option.disabled}
                onClick={() => !option.disabled && handleSelect(option.value)}
              />
            ))}
          </SelectGroup>
        </SelectContainer>
      </>
    );
  }
);

const SelectContainer = React.forwardRef<HTMLDivElement, SelectContainerProps>(
  ({ className, children, size, ...props }, ref) => {
    const containerStyle = cva("relative", {
      variants: {
        size: {
          sm: "w-40",
          md: "w-80",
          lg: "w-120",
        },
      },
      defaultVariants: {
        size: "md",
      },
    });

    return (
      <div
        ref={ref}
        className={cn(containerStyle({ size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

// SelectTrigger 컴포넌트
const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, error, isOpen, children, ...props }, ref) => {
    const triggerStyle = cva(
      `rounded-md cursor-pointer transition-[color,box-shadow] 
    focus-visible:ring-ring/50 focus-visible:ring-[1px]
    disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
    w-full text-left flex items-center justify-between
    bg-white hover:bg-default-50 dark:bg-default-900 dark:hover:bg-default-800 border border-default-200 dark:border-default-600
    h-9 text-base px-3 py-1
    `
    );

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          triggerStyle(),
          error && "border-error-500 ring-error-500/20",
          className
        )}
        {...props}
      >
        {children}
        {/* 화살표 아이콘 */}
        <FaChevronDown
          className={cn(
            "size-3 transition-transform duration-300",
            "text-default-400 dark:text-default-600",
            isOpen && "rotate-180"
          )}
        />
      </button>
    );
  }
);

// SelectValue 컴포넌트
const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ className, value, ...props }, ref) => {
    const SelectValueStyle = cva(
      "flex-1 text-default-700 dark:text-default-300 truncate"
    );

    return (
      <span ref={ref} className={cn(SelectValueStyle(), className)} {...props}>
        {value}
      </span>
    );
  }
);

// SelectLabel 컴포넌트
const SelectLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex-1 truncate text-default-600 dark:text-default-400 p-3 text-sm",
      className
    )}
    {...props}
  >
    {children}
  </span>
));

// SelectGroup 컴포넌트
const SelectGroup = React.forwardRef<HTMLDivElement, SelectGroupProps>(
  ({ isOpen, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute top-full left-0 w-full mt-1 p-1",
        "bg-white dark:bg-default-800 border border-default-200 dark:border-default-800",
        "rounded-md shadow-lg z-10 max-h-60 overflow-auto",
        "transition-all duration-150",
        isOpen
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto ease-out"
          : "opacity-0 scale-95 -translate-y-1 pointer-events-none ease-in",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

// SelectItem 컴포넌트
const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, value, disabled, selected, onClick, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "px-3 py-2 cursor-pointer transition-colors rounded-md",
        "",
        disabled
          ? "bg-transparent text-default-200 dark:text-default-600 cursor-not-allowed "
          : "bg-white dark:bg-default-800 hover:bg-default-50 dark:hover:bg-default-700 text-default-800  dark:text-default-200 hover:text-default-700 dark:hover:text-default-200 ",
        selected && "bg-default-50 dark:bg-default-700",
        className
      )}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      <div className="flex justify-between items-center">
        {value} {selected && <FaCheck className="size-3" />}
      </div>
    </div>
  )
);

export {
  Select,
  SelectContainer,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
  SelectItem,
};

Select.displayName = "Select";
SelectContainer.displayName = "SelectContainer";
SelectTrigger.displayName = "SelectTrigger";
SelectValue.displayName = "SelectValue";
SelectLabel.displayName = "SelectLabel";
SelectGroup.displayName = "SelectGroup";
SelectItem.displayName = "SelectItem";
