import { Icon, IconButton } from "@yundeving/story-book-demo-ui";
import { FaFacebook } from "react-icons/fa";

export default function FacebookLoginButton() {
  return (
    <IconButton
      label="Login with Facebook"
      className="border-blue text-default-900 bg-blue-500 text-sm hover:bg-blue-600 active:bg-blue-700"
      icon={<Icon icon={<FaFacebook />} className="text-white" />}
    />
  );
}
