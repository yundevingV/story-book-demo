import { Tooltip } from "@yundeving/story-book-demo-ui";

export default function PositionTooltip() {
  return (
    <div className="flex gap-4">
      <Tooltip
        content="Tooltip content"
        position="top"
        className="cursor-pointer"
      >
        Top
      </Tooltip>
      <Tooltip
        content="Tooltip content"
        position="bottom"
        className="cursor-pointer"
      >
        Bottom
      </Tooltip>
      <Tooltip
        content="Tooltip content"
        position="left"
        className="cursor-pointer"
      >
        Left
      </Tooltip>
      <Tooltip
        content="Tooltip content"
        position="right"
        className="cursor-pointer"
      >
        Right
      </Tooltip>
    </div>
  );
}
