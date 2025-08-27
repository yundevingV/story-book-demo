import { Tooltip } from "@yundeving/story-book-demo-ui";

const POSITIONS = ["top", "bottom", "left", "right"] as const;

export default function PositionTooltip() {
  return (
    <div className="flex gap-4">
      {POSITIONS.map((position) => (
        <Tooltip
          key={position}
          content="Tooltip content"
          position={position}
          className="cursor-pointer"
        >
          {position.charAt(0).toUpperCase() + position.slice(1)}
        </Tooltip>
      ))}
    </div>
  );
}
