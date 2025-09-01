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

const SUCCESS_EMAIL = "success@gmail.com";
const SUCCESS_PASSWORD = "123456";

const API_DELAY = 1000;

export default function SuccessLoginExample() {
  const [successLoginForm, setSuccessLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [successLoginButtonStatus, setSuccessLoginButtonStatus] =
    useState(false);

  const [isError, setIsError] = useState(false);
  const handleSuccessLogin = () => {
    setSuccessLoginButtonStatus(true);
    setIsError(false);
    if (
      successLoginForm.email === SUCCESS_EMAIL &&
      successLoginForm.password === SUCCESS_PASSWORD
    ) {
      setTimeout(() => {
        setSuccessLoginButtonStatus(false);
      }, API_DELAY);
    } else {
      setTimeout(() => {
        setSuccessLoginButtonStatus(false);
        setIsError(true);
      }, API_DELAY);
    }
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
                value={successLoginForm.email}
                error={isError}
                helperText={isError ? "invalid Email Format" : undefined}
                onChange={(e) =>
                  setSuccessLoginForm({
                    ...successLoginForm,
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
                value={successLoginForm.password}
                error={isError}
                helperText={isError ? "invalid Password" : undefined}
                onChange={(e) =>
                  setSuccessLoginForm({
                    ...successLoginForm,
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
          isLoading={successLoginButtonStatus}
          onClick={handleSuccessLogin}
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
