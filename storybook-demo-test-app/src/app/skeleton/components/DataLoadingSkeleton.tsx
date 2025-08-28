import {
  CardContent,
  CardTitle,
  Card,
  CardDescription,
  CardHeader,
  Skeleton,
} from "@yundeving/story-book-demo-ui";

export default function DataLoadingSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Loading</CardTitle>
        <CardDescription>데이터 로딩 스켈레톤</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
}
