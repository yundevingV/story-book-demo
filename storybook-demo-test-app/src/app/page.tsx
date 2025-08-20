import { Button } from "@yundeving/story-book-demo-ui";
import { Input } from "@yundeving/story-book-demo-ui";

export default function Home() {
  return (
    <div>
      <Button variant="default" size="lg">
        Button
      </Button>
      <Button variant="error" size="lg">
        error
      </Button>
      <Button variant="info" size="lg">
        info
      </Button>
      <Button variant="warning" size="lg">
        warning
      </Button>
      <Button variant="success" size="lg">
        success
      </Button>
      <Input placeholder="왜 씨에쓰에쓰가안되냐" />
    </div>
  );
}
