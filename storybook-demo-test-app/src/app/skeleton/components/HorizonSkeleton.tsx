import { Skeleton } from "@yundeving/story-book-demo-ui";

export default function HorizonSkeleton() {
  const opacitiyList = [
    "opacity-100",
    "opacity-80",
    "opacity-60",
    "opacity-40",
    "opacity-10",
  ];

  return (
    <div className="flex flex-col gap-4">
      {opacitiyList.map((opacityClass) => (
        <div
          key={opacityClass}
          className={`flex items-center gap-2 ${opacityClass}`}
        >
          <Skeleton className="size-8" />
          <Skeleton className="h-8 w-48" />
        </div>
      ))}
    </div>
  );
}
