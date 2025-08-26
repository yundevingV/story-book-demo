# 🤝 기여 가이드 (Contributing Guide)

Story Book Demo UI 프로젝트에 기여해주셔서 감사합니다! 이 가이드는 프로젝트에 효과적으로 기여하는 방법을 설명합니다.

## 📋 목차

- [시작하기](#시작하기)
- [개발 환경 설정](#개발-환경-설정)
- [기여 워크플로우](#기여-워크플로우)
- [코딩 규칙](#코딩-규칙)
- [커밋 메시지 규칙](#커밋-메시지-규칙)
- [Pull Request 가이드](#pull-request-가이드)
- [이슈 리포팅](#이슈-리포팅)

## 🚀 시작하기

### 1. 레포지토리 Fork

- 이 레포지토리의 우상단 "Fork" 버튼을 클릭하여 본인 계정으로 복사합니다.

### 2. 로컬에 클론

```bash
git clone https://github.com/yundevingV/story-book-demo.git
cd story-book-demo
```

### 3. 업스트림 원격 저장소 추가

```bash
git remote add upstream https://github.com/yundevingV/story-book-demo.git
```

## 🛠️ 개발 환경 설정

### 필요 조건

- Node.js 18+
- Yarn 패키지 매니저

### 설치

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev

# Storybook 실행 (UI 컴포넌트 개발용)
yarn storybook
```

## 🔄 기여 워크플로우

### 1. 최신 상태로 동기화

작업을 시작하기 전에 항상 최신 상태로 동기화합니다:

```bash
git checkout master
git fetch upstream
git merge upstream/master
git push origin master
```

### 2. 작업 브랜치 생성

1. `issue` 탭 클릭
2. `New Issue` 새로운 이슈 생성
3. 제목은 영어로 (branch 이름 영어로 하기 위함), 설명은 한글이나 영어로 작성
4. 오른쪽에 `Assigner`, `Label` 지정
5. `create a branch` 작업 진행

### 3. 작업 진행

- 코드 작성
- 테스트 추가/수정
- 문서 업데이트

### 4. 커밋 및 푸시

```bash
git add .
git commit -m "feat: Button 컴포넌트에 loading 상태 추가"
git push origin your-branch
```

### 5. Pull Request 생성

- GitHub에서 "Compare & pull request" 버튼 클릭
- PR 템플릿에 따라 상세한 설명 작성

## 📝 코딩 규칙

### TypeScript

- 모든 컴포넌트는 TypeScript로 작성
- 명시적 타입 정의 사용
- Props는 별도의 `.type.ts` 파일에 정의

### React 컴포넌트

```typescript
// ✅ 좋은 예
interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button = ({
  label,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`} disabled={disabled}>
      {label}
    </button>
  );
};
```

### 스타일링

- Tailwind CSS 사용
- class-variance-authority (cva) 활용
- 일관된 디자인 시스템 준수

### 폴더 구조

```
ui/components/ComponentName/
├── index.ts          # 컴포넌트 export
├── ComponentName.tsx # 컴포넌트 구현
└── ComponentName.type.ts # 타입 정의
```

## 💬 커밋 메시지 규칙

[Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### 타입

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가/수정
- `chore`: 빌드 프로세스, 패키지 매니저 설정 등

### 예시

```bash
feat(Button): loading 상태 및 스피너 아이콘 추가

- Button 컴포넌트에 loading prop 추가
- 로딩 중일 때 스피너 아이콘 표시
- 로딩 중에는 클릭 비활성화

Closes #123
```

## 🔍 Pull Request 가이드

### PR 제목

```
feat(Button): loading 상태 추가
fix(Input): validation 오류 수정
docs: README 설치 가이드 업데이트
```

### PR 설명 템플릿

```markdown
## 📋 변경 사항

- [ ] 새로운 기능 추가
- [ ] 버그 수정
- [ ] 문서 업데이트
- [ ] 리팩토링

## 🔗 관련 이슈

Closes #123

## 📸 스크린샷 (UI 변경 시)

Before: [스크린샷]
After: [스크린샷]

## ✅ 체크리스트

- [ ] 코드가 프로젝트 스타일 가이드를 따름
- [ ] 자체 리뷰 완료
- [ ] 테스트 추가/업데이트
- [ ] 문서 업데이트
```

### PR 리뷰 프로세스

1. 자동 CI/CD 검사 통과
2. 코드 리뷰 진행
3. 필요시 수정 요청
4. 승인 후 메인 브랜치에 머지

## 🐛 이슈 리포팅

### 버그 리포트

```markdown
**버그 설명**
간단하고 명확한 버그 설명

**재현 방법**

1. '...' 이동
2. '...' 클릭
3. '...' 스크롤
4. 오류 확인

**예상 동작**
예상했던 동작 설명

**실제 동작**
실제로 일어난 일 설명

**환경**

- OS: [e.g. macOS, Windows]
- 브라우저: [e.g. Chrome, Safari]
- 버전: [e.g. 22]
```

### 기능 요청

```markdown
**기능이 문제를 해결하는가?**
문제에 대한 명확하고 간단한 설명

**원하는 해결책**
원하는 동작에 대한 명확하고 간단한 설명

**고려한 대안**
고려한 대안 솔루션들에 대한 설명

**추가 컨텍스트**
기능 요청에 대한 추가 컨텍스트나 스크린샷
```

## 🎯 컴포넌트 개발 가이드

### 새 컴포넌트 추가 시

1. 컴포넌트 폴더 생성
2. TypeScript 인터페이스 정의
3. 컴포넌트 구현
4. Storybook 스토리 작성
5. 테스트 페이지 추가
6. 문서 업데이트

### 컴포넌트 체크리스트

- [ ] 접근성 (a11y) 고려
- [ ] 반응형 디자인
- [ ] 다크/라이트 테마 지원
- [ ] 키보드 네비게이션
- [ ] 적절한 ARIA 속성

## 🤔 질문이나 도움이 필요한가요?

- 이슈 탭에서 질문 생성
- 디스커션 탭 활용
- 기존 이슈들 검색해보기

## 📜 라이선스

이 프로젝트에 기여함으로써 당신의 기여가 동일한 라이선스 하에 있음에 동의합니다.

---

**기여해주셔서 감사합니다! 🎉**
