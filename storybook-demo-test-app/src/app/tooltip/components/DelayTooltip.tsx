import { Tooltip } from "@yundeving/story-book-demo-ui";

export default function DelayTooltip() {
  return (
    <div className="flex gap-8">
      <Tooltip
        content="Tooltip content"
        delay={1000}
        className="cursor-pointer"
      >
        delay 1000
      </Tooltip>

      <Tooltip content="Tooltip content" delay={100} className="cursor-pointer">
        delay 100
      </Tooltip>
    </div>
  );
}
