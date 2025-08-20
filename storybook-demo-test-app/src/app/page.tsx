import { Badge, Button } from "@yundeving/story-book-demo-ui";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Button className="" variant="default" size="lg">
        Button
      </Button>
      <Badge variant="success">home</Badge>
    </div>
  );
}
