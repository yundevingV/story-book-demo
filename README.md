# 🎨 Storybook Demo UI Library

## ✨ 프로젝트 소개

이 프로젝트는 **Storybook**을 활용한 재사용 가능한 UI 컴포넌트 라이브러리입니다. 최신 웹 기술 스택을 사용하여 현대적이고 확장 가능한 컴포넌트들을 구축했습니다.

## 🚀 기술 스택

| 기술             | 버전 | 설명                           |
| ---------------- | ---- | ------------------------------ |
| **React**        | 19   | 최신 React 기능 활용           |
| **TypeScript**   | 5.9+ | 타입 안전성 보장               |
| **Tailwind CSS** | v4   | 유틸리티 퍼스트 CSS 프레임워크 |
| **Storybook**    | 최신 | 컴포넌트 개발 및 문서화 도구   |
| **Next.js**      | 15   | 테스트 앱용 React 프레임워크   |

## 🏗️ 프로젝트 구조

- story-book-demo/ (monorepo root)
  - @yundeving/story-book-demo-ui/ (UI component library)
  - storybook-demo-test-app/ (Next.js test app)

## 🚀 시작하기

### 1. 의존성 설치

```bash
# 모노레포 루트에서
yarn install
```

### 2. 개발 서버 실행

```bash
# UI 라이브러리 Storybook 실행
yarn ui storybook

# 테스트 앱 실행
yarn app dev

# 컴포넌트 빌드
yarn ui build
```

## 📦 사용법

### 1. CSS Import (필수)

먼저 앱의 `globals.css` 또는 `layout.tsx`에 다음을 추가하세요:

```css
/* globals.css */
@import "@yundeving/story-book-demo-ui/styled.css";
```

또는 Next.js App Router의 경우:

```tsx
// app/layout.tsx
import "@yundeving/story-book-demo-ui/styled.css";
```

### 2. 컴포넌트 사용

```tsx
import { Badge, Button, Card } from "@yundeving/story-book-demo-ui";

function App() {
  return (
    <Card>
      <h2>Welcome to our UI library</h2>
      <Button variant="primary">Click me</Button>
      <Badge>New</Badge>
    </Card>
  );
}
```

## 🧪 테스트 앱

### 테스트 앱 실행

```bash
# 테스트 앱 개발 서버 실행
yarn workspace storybook-demo-test-app dev

# 브라우저에서 http://localhost:3000 접속
```

### 테스트 앱 기능

- 모든 UI 컴포넌트 실시간 테스트
- 다양한 variant, size, state 조합 확인
- 반응형 디자인 테스트
- 실제 Next.js 환경에서의 동작 검증

## 🎨 컴포넌트 가이드

### Button

- **Variants**: default, primary, secondary, accent, info, success, warning, error
- **Sizes**: sm, md, lg
- **States**: default, loading, success, error

### Badge

- **Variants**: default, primary, secondary, accent, info, success, warning, error
- **Sizes**: sm, md, lg

### Card

- **Components**: CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction

### Input

- **Variants**: default, filled, outline
- **Features**: error state, helper text, validation

## ⚒️ 개발 환경

- **Node.js**: 18+
- **Package Manager**: Yarn 4.9.0
- **Editor**: VS Code (권장)
- **Browser**: Chrome, Firefox, Safari, Edge

## 📋 의존성

### Peer Dependencies

- `react`: >=16.8.0
- `react-dom`: >=16.8.0

### Dependencies

- `clsx`: CSS 클래스 조합
- `tailwind-merge`: Tailwind 클래스 충돌 해결
- `class-variance-authority`: 컴포넌트 variant 관리
- `react-icons`: 아이콘 컴포넌트

## 🎯 워크스페이스 명령어

```bash
# UI 라이브러리 관련
yarn ui build
yarn ui storybook

# 테스트 앱 관련
yarn app dev
yarn app build
yarn app start

```

## 📚 문서

- [📦 UI 컴포넌트 라이브러리 README](@yundeving/story-book-demo-ui/README.md)
- [📝 UI 라이브러리 CHANGELOG](@yundeving/story-book-demo-ui/CHANGELOG.md)

## ⚠️ 중요사항

- CSS import 없이는 컴포넌트 스타일링이 적용되지 않습니다
- Tailwind 설정이나 추가 CSS 작업이 필요하지 않습니다
- 한 줄 import로 모든 스타일이 자동 적용됩니다
- 테스트 앱은 개발중이며 라이브러리 개발 및 검증용입니다

## 라이선스

MIT License
