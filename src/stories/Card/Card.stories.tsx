import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./Card";
import { Button } from "../Button/Button";
import { Input } from "../input/Input";
import { Label } from "../Label/Label";
import { IconButton } from "../IconButton/IconButton";
import { Icon } from "../icon/Icon";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "추가 CSS 클래스",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// 기본 Card
export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드에 대한 간단한 설명입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          카드의 주요 내용이 들어갑니다. 여기에 텍스트, 이미지, 폼 등 다양한
          요소를 배치할 수 있습니다.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="primary">확인</Button>
        <Button variant="default">취소</Button>
      </CardFooter>
    </Card>
  ),
};

// 헤더만 있는 Card
export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>헤더만 있는 카드</CardTitle>
        <CardDescription>제목과 설명만 포함된 카드입니다.</CardDescription>
      </CardHeader>
    </Card>
  ),
};

// 액션이 있는 Card
export const WithAction: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>알림 카드</CardTitle>
        <CardDescription>새로운 메시지가 도착했습니다.</CardDescription>
        <CardAction>
          <Button size="sm" variant="default">
            닫기
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>사용자로부터 새로운 메시지가 도착했습니다. 확인해보세요.</p>
      </CardContent>
    </Card>
  ),
};

// 이미지가 있는 Card
export const ThumbnailViewCard: Story = {
  render: () => (
    <>
      <Card className="w-80 overflow-hidden">
        <div className="w-full h-48 bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center"></div>
        <CardHeader>
          <CardTitle>썸네일 뷰 카드</CardTitle>
          <CardDescription>썸네일 뷰 카드입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>썸네일 뷰 카드입니다.</p>
        </CardContent>
      </Card>
    </>
  ),
};

// 이미지가 있는 Card
export const ListViewCard: Story = {
  render: () => (
    <>
      <Card className="w-80 overflow-hidden">
        <CardHeader>
          <CardTitle>리스트 뷰 카드</CardTitle>
          <CardDescription>리스트 뷰 카드입니다.</CardDescription>
        </CardHeader>

        <CardContent className="flex gap-4 items-center">
          <div className="size-16 rounded-lg bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
            <span className="text-white text-lg font-medium"></span>
          </div>
          <p>리스트 뷰 카드입니다.</p>
        </CardContent>
      </Card>
      <Card className="w-80 overflow-hidden">
        <CardHeader>
          <CardTitle>리스트 뷰 카드</CardTitle>
        </CardHeader>

        <CardContent className="flex gap-4 items-center">
          <div className="size-16 rounded-lg bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
            <span className="text-white text-lg font-medium"></span>
          </div>
          <div className="flex flex-col gap-2">
            <p>리스트 뷰 카드입니다.</p>
            <p className="text-sm text-default-600">리스트 뷰 카드입니다.</p>
          </div>
        </CardContent>
      </Card>
      <Card className="w-80 overflow-hidden">
        <CardContent className="flex gap-4 items-center">
          <div className="size-16 rounded-lg bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
            <span className="text-white text-lg font-medium"></span>
          </div>
          <div className="flex flex-col gap-2">
            <p>리스트 뷰 카드입니다.</p>
            <p className="text-sm text-default-600">리스트 뷰 카드입니다.</p>
          </div>
        </CardContent>
      </Card>
    </>
  ),
};

// 다양한 크기의 Card
export const DifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-4xl">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>큰 카드</CardTitle>
          <CardDescription>전체 너비를 사용하는 카드입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            이 카드는 전체 너비를 사용하여 더 많은 내용을 표시할 수 있습니다.
          </p>
        </CardContent>
      </Card>

      <Card className="w-96">
        <CardHeader>
          <CardTitle>중간 카드</CardTitle>
          <CardDescription>고정된 너비를 가진 카드입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>적당한 크기로 내용을 표시합니다.</p>
        </CardContent>
      </Card>

      <Card className="w-64">
        <CardHeader>
          <CardTitle>작은 카드</CardTitle>
          <CardDescription>컴팩트한 카드입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>간단한 정보를 표시합니다.</p>
        </CardContent>
      </Card>
    </div>
  ),
};

// 테마별 Card
export const ThemeVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <Card className="border-primary-200 bg-primary-50">
        <CardHeader>
          <CardTitle className="text-primary-800 dark:text-primary-200">
            Primary 테마
          </CardTitle>
          <CardDescription className="text-primary-600 dark:text-primary-400">
            Primary 색상을 사용한 카드입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-primary-700 dark:text-primary-300">
            Primary 색상과 어울리는 내용입니다.
          </p>
        </CardContent>
      </Card>

      <Card className="border-secondary-200 bg-secondary-50">
        <CardHeader>
          <CardTitle className="text-secondary-800 dark:text-secondary-200">
            Secondary 테마
          </CardTitle>
          <CardDescription className="text-secondary-600 dark:text-secondary-400">
            Secondary 색상을 사용한 카드입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-secondary-700 dark:text-secondary-300">
            Secondary 색상과 어울리는 내용입니다.
          </p>
        </CardContent>
      </Card>

      <Card className="border-success-200 bg-success-50">
        <CardHeader>
          <CardTitle className="text-success-800 dark:text-success-200">
            Success 테마
          </CardTitle>
          <CardDescription className="text-success-600 dark:text-success-400">
            Success 색상을 사용한 카드입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-success-700 dark:text-success-300">
            Success 색상과 어울리는 내용입니다.
          </p>
        </CardContent>
      </Card>

      <Card className="border-warning-200 bg-warning-50">
        <CardHeader>
          <CardTitle className="text-warning-800 dark:text-warning-200">
            Warning 테마
          </CardTitle>
          <CardDescription className="text-warning-600 dark:text-warning-400">
            Warning 색상을 사용한 카드입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-warning-700 dark:text-warning-300">
            Warning 색상과 어울리는 내용입니다.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
};

// 실제 사용 예시
export const RealWorldExample: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      {/* 사용자 프로필 카드 */}
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
              <p className="text-sm text-default-600">user@example.com</p>
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
            <div className="text-3xl font-bold text-primary-600">1,234</div>
            <p className="text-sm text-default-600">총 방문자 수</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="primary" size="sm">
            자세히 보기
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const LoginCard: Story = {
  render: () => (
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
              <Label>Email</Label>
              <Input placeholder="m@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input placeholder="" />
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
  ),
};
