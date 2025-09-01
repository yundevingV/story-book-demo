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
import { Button } from "@yundeving/story-book-demo-ui";
import { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

const API_DELAY = 1000;

export default function FailLoginExample() {
  const [failLoginForm, setFailLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [failLoginButtonStatus, setFailLoginButtonStatus] = useState(false);

  const [isError, setIsError] = useState(false);

  const handleFailLogin = () => {
    setFailLoginButtonStatus(true);
    setIsError(false);

    setTimeout(() => {
      setFailLoginButtonStatus(false);
      setIsError(true);
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
                error={isError}
                helperText={isError ? "invalid Email Format" : undefined}
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
                error={isError}
                helperText={isError ? "invalid Password" : undefined}
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
          isLoading={failLoginButtonStatus}
          onClick={handleFailLogin}
        >
          로그인
        </Button>
        <Button
          label="Login with Kakao"
          leftIcon={<KakaoIcon />}
          className="border-yellow w-full bg-yellow-500 text-sm text-black hover:bg-yellow-600 active:bg-yellow-700"
        />
      </CardFooter>
    </Card>
  );
}
