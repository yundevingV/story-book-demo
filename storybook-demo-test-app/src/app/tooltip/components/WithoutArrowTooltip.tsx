import { Tooltip } from "@yundeving/story-book-demo-ui";

export default function WithoutArrowTooltip() {
  return (
    <Tooltip
      content="Tooltip content"
      isArrow={false}
      className="cursor-pointer"
    >
      Tooltip
    </Tooltip>
  );
}
