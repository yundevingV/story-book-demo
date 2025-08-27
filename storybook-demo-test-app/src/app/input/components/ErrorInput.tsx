import { Input } from "@yundeving/story-book-demo-ui";

export default function ErrorInput() {
  return (
    <Input
      type="email"
      placeholder="Email"
      error
      helperText="invalid Email Format"
    />
  );
}
