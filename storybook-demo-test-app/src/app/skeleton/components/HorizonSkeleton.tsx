import { Skeleton } from "@yundeving/story-book-demo-ui";

export default function HorizonSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 opacity-100">
        <Skeleton className="size-8" />
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="flex items-center gap-2 opacity-80">
        <Skeleton className="size-8" />
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="flex items-center gap-2 opacity-60">
        <Skeleton className="size-8" />
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="flex items-center gap-2 opacity-40">
        <Skeleton className="size-8" />
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="flex items-center gap-2 opacity-10">
        <Skeleton className="size-8" />
        <Skeleton className="h-8 w-48" />
      </div>
    </div>
  );
}
