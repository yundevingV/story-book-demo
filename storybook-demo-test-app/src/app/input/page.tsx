"use client";

import {
  DocumentationLayout,
  DocumentationSection,
  SectionDescription,
  SectionContent,
  SectionTitle,
} from "@/components/documentation";
import { KakaoIcon } from "@/components/icon/KakaoIcon";
import {
  CardDescription,
  CardFooter,
  Button,
  IconButton,
  Input,
  CardContent,
  Card,
  Label,
  CardHeader,
  CardTitle,
} from "@yundeving/story-book-demo-ui";
import { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

type LoginButtonStatus = "default" | "loading" | "success" | "error";

const SUCCESS_EMAIL = "success@gmail.com";
const SUCCESS_PASSWORD = "123456";

const API_DELAY = 1000;

export default function InputPage() {
  // Success Login Form
  const [successLoginForm, setSuccessLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [successLoginButtonStatus, setSuccessLoginButtonStatus] =
    useState<LoginButtonStatus>("default");

  const [failLoginButtonStatus, setFailLoginButtonStatus] =
    useState<LoginButtonStatus>("default");

  const handleSuccessLogin = () => {
    setSuccessLoginButtonStatus("loading");

    if (
      successLoginForm.email === SUCCESS_EMAIL &&
      successLoginForm.password === SUCCESS_PASSWORD
    ) {
      setTimeout(() => {
        setSuccessLoginButtonStatus("success");
      }, 1000);
    } else {
      setTimeout(() => {
        setSuccessLoginButtonStatus("error");
      }, 1000);
    }
  };

  const handleFailLogin = () => {
    setFailLoginButtonStatus("loading");

    setTimeout(() => {
      setFailLoginButtonStatus("error");
    }, API_DELAY);
  };

  const [failLoginForm, setFailLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  return (
    <DocumentationLayout title="Input" description="Displays an input field.">
      <DocumentationSection id="email-input">
        <SectionContent
          preview={<Input type="email" placeholder="Email" />}
          code={`import { Input } from "@yundeving/story-book-demo-ui";

<Input type="email" placeholder="Email" />`}
        />
      </DocumentationSection>
      <DocumentationSection id="error-input">
        <SectionContent
          preview={
            <Input
              type="email"
              placeholder="Email"
              error
              helperText="invalid Email Format"
            />
          }
          code={`import { Input } from "@yundeving/story-book-demo-ui";

<Input type="email" placeholder="Email" error helperText="invalid Email Format" />`}
        />
      </DocumentationSection>
      <DocumentationSection id="success-login-input">
        <SectionTitle>Success Login Example</SectionTitle>
        <SectionDescription>
          This is a success login example. <br /> <br />
        </SectionDescription>
        <SectionDescription>
          <ul>
            <li>Login This Email & Password.</li>
            <li>Email : {SUCCESS_EMAIL}</li>
            <li>Password : {SUCCESS_PASSWORD}</li>
            <li>Success Login !</li>
          </ul>
        </SectionDescription>
        <SectionContent
          preview={
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
                  disabled={successLoginButtonStatus === "loading"}
                  status={successLoginButtonStatus}
                  onClick={handleSuccessLogin}
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
          }
          code={`import { Input } from "@yundeving/story-book-demo-ui";

<Input type="email" placeholder="Email" error helperText="invalid Email Format" />`}
        />
      </DocumentationSection>
      <DocumentationSection id="fail-login-input">
        <SectionTitle>Fail Login Example</SectionTitle>
        <SectionDescription>
          This is a fail login example. <br /> <br />
        </SectionDescription>
        <SectionDescription>
          <ul>
            <li>Login This Email & Password.</li>
            <li>Email : fail@gmail.com</li>
            <li>Password : 123456</li>
            <li>Fail Login !</li>
          </ul>
        </SectionDescription>
        <SectionContent
          preview={
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
          }
          code={`import { Input } from "@yundeving/story-book-demo-ui";

<Input type="email" placeholder="Email" error helperText="invalid Email Format" />`}
        />
      </DocumentationSection>
    </DocumentationLayout>
  );
}
