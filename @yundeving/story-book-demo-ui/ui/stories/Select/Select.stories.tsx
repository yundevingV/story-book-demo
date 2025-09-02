import {
  Select,
  SelectContainer,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components";
import Label from "../../components/Label";
import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,

  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectExample: Story = {
  args: {
    size: "md",
    options: [
      { value: "dark", label: "Dark" },
      { value: "light", label: "Light" },
      { value: "system", label: "System" },
    ],
  },
  render: (args) => {
    const options = [
      { value: "dark", label: "Dark" },
      { value: "light", label: "Light" },
      { value: "system", label: "System" },
    ];

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectedValue, setSelectedValue] = React.useState<string>("");
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
      setIsOpen(false);
    };

    const selectedOption = options.find((opt) => opt.value === selectedValue);

    return (
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <SelectContainer ref={selectRef} size={args.size}>
          <SelectTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <SelectValue value={selectedOption?.label || "Choose an option"} />
          </SelectTrigger>

          <SelectGroup isOpen={isOpen}>
            <SelectLabel>Theme</SelectLabel>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                selected={selectedValue === option.value}
                onClick={() => handleSelect(option.value)}
              />
            ))}
          </SelectGroup>
        </SelectContainer>
      </div>
    );
  },
};

export const SelectWithLabel: Story = {
  render: () => {
    const options = [
      { value: "dark", label: "Dark" },
      { value: "light", label: "Light" },
      { value: "system", label: "System" },
    ];

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectedValue, setSelectedValue] = React.useState<string>("");
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
      setIsOpen(false);
    };

    const selectedOption = options.find((opt) => opt.value === selectedValue);

    return (
      <>
        <div className="flex flex-col items-center gap-4 p-4">
          <Label className="w-full text-left">시스템 설정</Label>

          <SelectContainer ref={selectRef} className="w-full">
            <SelectTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
              <SelectValue
                value={selectedOption?.label || "Choose an option"}
              />
            </SelectTrigger>

            <SelectGroup isOpen={isOpen}>
              <SelectLabel>Theme</SelectLabel>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  selected={selectedValue === option.value}
                  onClick={() => handleSelect(option.value)}
                />
              ))}
            </SelectGroup>
          </SelectContainer>
        </div>
      </>
    );
  },
};

export const SelectWithDisabledItem: Story = {
  render: () => {
    const options = [
      { value: "dark", label: "Dark", disabled: true },
      { value: "light", label: "Light" },
      { value: "system", label: "System" },
    ];

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectedValue, setSelectedValue] = React.useState<string>("");
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
      setIsOpen(false);
    };

    const selectedOption = options.find((opt) => opt.value === selectedValue);

    return (
      <div className="flex flex-col items-center gap-4 p-4">
        <SelectContainer ref={selectRef}>
          <SelectTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <SelectValue value={selectedOption?.label || "Choose an option"} />
          </SelectTrigger>

          <SelectGroup isOpen={isOpen}>
            <SelectLabel>Theme</SelectLabel>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                selected={selectedValue === option.value}
                disabled={option.disabled}
                onClick={() => handleSelect(option.value)}
              />
            ))}
          </SelectGroup>
        </SelectContainer>
      </div>
    );
  },
};

export const SmallSizeSelect: Story = {
  render: () => {
    const options = [
      { value: "dark", label: "Dark" },
      { value: "light", label: "Light" },
      { value: "system", label: "System" },
    ];

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectedValue, setSelectedValue] = React.useState<string>("");
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
      setIsOpen(false);
    };

    const selectedOption = options.find((opt) => opt.value === selectedValue);

    return (
      <div className="flex flex-col items-center gap-4 p-4">
        <SelectContainer ref={selectRef} size="sm">
          <SelectTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <SelectValue value={selectedOption?.label || "Choose an option"} />
          </SelectTrigger>

          <SelectGroup isOpen={isOpen}>
            <SelectLabel>Theme</SelectLabel>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                selected={selectedValue === option.value}
                onClick={() => handleSelect(option.value)}
              />
            ))}
          </SelectGroup>
        </SelectContainer>
      </div>
    );
  },
};
