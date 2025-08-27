"use client";

import DefaultInput from "./components/DefaultInput";
import ErrorInput from "./components/ErrorInput";
import FailLoginExample from "./components/FailLoginExample";
import SuccessLoginExample from "./components/SuccessLoginExample";
import {
  DocumentationLayout,
  DocumentationSection,
  SectionDescription,
  SectionContent,
  SectionTitle,
} from "@/components/documentation";
import { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

interface LoginForm {
  email: string;
  password: string;
}

type LoginButtonStatus = "default" | "loading" | "success" | "error";

const SUCCESS_EMAIL = "success@gmail.com";
const SUCCESS_PASSWORD = "123456";

const API_DELAY = 1000;

export default function InputPage() {
  return (
    <DocumentationLayout title="Input" description="Displays an input field.">
      <DocumentationSection id="email-input">
        <SectionContent
          preview={<DefaultInput />}
          code={reactElementToJSXString(DefaultInput())}
        />
      </DocumentationSection>
      <DocumentationSection id="error-input">
        <SectionContent
          preview={<ErrorInput />}
          code={reactElementToJSXString(ErrorInput())}
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
          preview={<SuccessLoginExample />}
          code={reactElementToJSXString(SuccessLoginExample())}
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
          preview={<FailLoginExample />}
          code={reactElementToJSXString(FailLoginExample())}
        />
      </DocumentationSection>
    </DocumentationLayout>
  );
}
