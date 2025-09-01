import {
  SelectContainer,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@yundeving/story-book-demo-ui";
import { useRef, useState } from "react";

export default function DefaultSelect() {
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "watermelon", label: "Watermelon" },
  ];

  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      {/* Select 컨테이너 */}
      <SelectContainer ref={selectRef} size="md">
        <SelectTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <SelectValue value={selectedValue || "Choose an option"} />
        </SelectTrigger>

        <SelectGroup isOpen={isOpen}>
          <SelectLabel>Select Fruit</SelectLabel>
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
    </>
  );
}
