import { KakaoIcon } from "@/components/icon/KakaoIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@yundeving/story-book-demo-ui";
import { Label } from "@yundeving/story-book-demo-ui";
import { Input } from "@yundeving/story-book-demo-ui";
import { Button, IconButton } from "@yundeving/story-book-demo-ui";
import { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

type LoginButtonStatus = "default" | "loading" | "success" | "error";

const API_DELAY = 1000;

export default function FailLoginExample() {
  const [failLoginForm, setFailLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [failLoginButtonStatus, setFailLoginButtonStatus] =
    useState<LoginButtonStatus>("default");

  const handleFailLogin = () => {
    setFailLoginButtonStatus("loading");

    setTimeout(() => {
      setFailLoginButtonStatus("error");
    }, API_DELAY);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <form>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                value={failLoginForm.email}
                error={failLoginButtonStatus === "error"}
                helperText={
                  failLoginButtonStatus === "error"
                    ? "invalid Email Format"
                    : undefined
                }
                onChange={(e) =>
                  setFailLoginForm({
                    ...failLoginForm,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="password"
                value={failLoginForm.password}
                error={failLoginButtonStatus === "error"}
                helperText={
                  failLoginButtonStatus === "error"
                    ? "invalid Email Format"
                    : undefined
                }
                onChange={(e) =>
                  setFailLoginForm({
                    ...failLoginForm,
                    password: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button
          variant="primary"
          size="sm"
          className="w-full"
          disabled={failLoginButtonStatus === "loading"}
          status={failLoginButtonStatus}
          onClick={handleFailLogin}
        >
          로그인
        </Button>
        <IconButton
          label="Login with Kakao"
          icon={<KakaoIcon />}
          className="border-yellow w-full bg-yellow-500 text-sm text-black hover:bg-yellow-600 active:bg-yellow-700"
        />
      </CardFooter>
    </Card>
  );
}
