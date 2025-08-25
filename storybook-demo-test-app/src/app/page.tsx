"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  IconButton,
  Icon,
  Label,
  Input,
  Badge,
  Tooltip,
  Skeleton,
  Select,
  StatusButton,
} from "@yundeving/story-book-demo-ui";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 items-center min-h-screen p-6">
      <h1 className="text-2xl font-bold text-default-800 dark:text-default-300 ">
        Hello Design System Demo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-6xl">
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
                  <Label htmlFor="email" aria-label="Email">
                    Email
                  </Label>
                  <Input id="email" placeholder="m@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label aria-label="Password">Password</Label>
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
              icon={
                <Icon
                  icon={
                    <svg
                      aria-label="Kakao logo"
                      width="16"
                      height="16"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#181600"
                        d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"
                      ></path>
                    </svg>
                  }
                  className="text-white-500"
                />
              }
              className="w-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-black border-yellow text-sm"
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
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
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
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
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
          <CardContent className="flex gap-3 flex-wrap">
            <IconButton
              label="새로고침"
              icon={<Icon icon={<span>🔄</span>} />}
            />
            <IconButton label="추가" icon={<Icon icon={<span>➕</span>} />} />
            <IconButton label="삭제" icon={<Icon icon={<span>🗑️</span>} />} />
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
