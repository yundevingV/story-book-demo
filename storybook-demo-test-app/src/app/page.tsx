"use client";

import { KakaoIcon } from "@/components/icon/KakaoIcon";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Icon,
  IconButton,
  Input,
  Label,
  Select,
  Skeleton,
  StatusButton,
  Tooltip,
} from "@yundeving/story-book-demo-ui";
import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { VscRefresh } from "react-icons/vsc";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-6 p-6">
      <h1 className="text-default-800 dark:text-default-300 text-2xl font-bold">
        Hello Design System Demo
      </h1>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                  <Input id="email" placeholder="m@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button variant="primary" size="sm" className="w-full">
              로그인
            </Button>
            <IconButton
              label="Login with Kakao"
              icon={<KakaoIcon />}
              className="border-yellow w-full bg-yellow-500 text-sm text-black hover:bg-yellow-600 active:bg-yellow-700"
            />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>사용자 프로필</CardTitle>
            <CardDescription>사용자 정보를 표시합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="bg-primary-500 flex h-12 w-12 items-center justify-center rounded-full font-bold text-white">
                U
              </div>
              <div>
                <p className="font-medium">사용자 이름</p>
                <CardDescription>user@example.com</CardDescription>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="default" size="sm">
              프로필 편집
            </Button>
          </CardFooter>
        </Card>

        {/* 통계 카드 */}
        <Card>
          <CardHeader>
            <CardTitle>통계</CardTitle>
            <CardDescription>주요 지표를 표시합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-primary-600 dark:text-primary-400 text-3xl font-bold">
                1,234
              </div>
              <CardDescription>총 방문자 수</CardDescription>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="primary" size="sm">
              자세히 보기
            </Button>
          </CardFooter>
        </Card>

        {/* 빠른 작업 */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>자주 사용하는 작업을 빠르게 실행</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <IconButton
              label="새로고침"
              icon={<Icon icon={<VscRefresh />} />}
            />
            <IconButton label="추가" icon={<Icon icon={<FaPlus />} />} />
            <IconButton label="삭제" icon={<Icon icon={<FaTrash />} />} />
          </CardContent>
        </Card>

        {/* 알림 및 배지 */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>상태를 배지로 표시</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3">
            <Badge variant="primary" size="md">
              New
            </Badge>
            <Badge variant="success" size="md">
              Success
            </Badge>
            <Badge variant="warning" size="md">
              Warning
            </Badge>
            <Badge variant="error" size="md">
              Error
            </Badge>
          </CardContent>
        </Card>

        {/* 시스템 상태 */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>현재 작업 상태</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <StatusButton status="loading" label="로딩 중" variant="default" />
            <StatusButton status="success" label="성공" variant="success" />
            <StatusButton status="error" label="에러" variant="error" />
          </CardContent>
        </Card>

        {/* 도움말 & 툴팁 */}
        <Card>
          <CardHeader>
            <CardTitle>Tips</CardTitle>
            <CardDescription>컴포넌트에 툴팁 추가</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3">
            <Tooltip content="저장합니다" position="top">
              <Button size="sm">저장</Button>
            </Tooltip>
            <Tooltip content="설정을 엽니다" position="right">
              <Button variant="secondary" size="sm">
                설정
              </Button>
            </Tooltip>
          </CardContent>
        </Card>

        {/* 로딩 상태 */}
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

        {/* 선택 입력 */}
        <Card>
          <CardHeader>
            <CardTitle>환경 설정</CardTitle>
            <CardDescription>옵션을 선택하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <Select
              size="sm"
              label="테마"
              options={[
                { label: "시스템", value: "system" },
                { label: "라이트", value: "light" },
                { label: "다크", value: "dark" },
              ]}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
