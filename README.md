## 자격저격

### 1. 프로젝트 정보

- 기술스택 : React, TypeScript, Vite
- 상태관리 : useState, zustand
- API 호출 : axios
- 스타일 : scss
- 라이브러리 : 추후 추가 예정
- 패키지 관리자 : npm

### 2. 프로젝트 설명

- 취업준비생을 위한 취업정보 웹사이트입니다.

### 3. 프로젝트 폴더 구조

```
/src
├── API
│ ├── common // API 호출을 위한 공통 폴더
│ │ ├── API.ts // API 호출 (axios)
│ │ ├── endpoints.ts // API endpoint 관리
│ │ └── queryKeys.ts // React Query key 관리
│ └── queries // React Query
├── assets
│ ├── fonts // 폰트
│ ├── images // 로고 이미지
│ └── styles // 컴포넌트별, 공통 스타일 코드
│ │ ├── layout // 레이아웃 스타일 코드
│ │ └── pages // 페이지별 스타일 코드
├── common
│ ├── store // Recoil store, 전역 상태 관리
├── pages
│ ├── common // 공통 컴포넌트
│ ├── CertDetail // 자격증 상세 페이지
│ ├── CertSearch // 자격증 검색 페이지
│ ├── Login // 로그인 페이지
│ ├── MainPage // 메인 페이지
│ ├── MyCalendar // 내 캘린더
│ ├── MyPage // 마이페이지
│ └── index.ts // 프로젝트 진입점
├── App.tsx // axios 인터셉터, 토큰 관리
├── vite.config.ts // 백엔드 프록시 설정
└── main.tsx  // 애플리케이션 최초 실행 모듈
```

### 4. 페이지별 폴더 구조

```
├── ... // 페이지명 폴더
│ ├── View // 해당 페이지에서 사용할 컴포넌트를 관리하는 폴더
│ ├── ...Service // 페이지에서 사용할 API 호출 데이터를 가져오거나 데이터를 가공하는 파일
│ ├── use...State // 페이지에서 사용할 상태 관리를 모아놓은 파일
│ ├── ...Container // 페이지 컨테이너를 관리하는 폴더
```

### 5. 프로젝트 실행

```
npm install
```

```
npm run dev
```

## Github 형상 관리

### 1. 커밋 메시지 규칙

```
<타입> 리스트
✨ Feat             : 새로운 기능 추가
🚧 Progress         : 작업 진행 중인 코드
🎯 Fix              : 코드 수정
🐛 Bug              : 버그 수정
🎨 Design           : CSS 등 사용자 UI 디자인 변경
💄 Style            : 코드 포맷 변경, 세미 콜론 누락 (비즈니스 로직 변경 X)
♻️ Refactor         : 프로덕션 코드 리팩토링
💡 Comment          : 필요한 주석 추가 및 변경
📋 Docs             : 문서 수정 (문서 추가, 수정, 삭제, README)
✅ Test             : 테스트 추가, 테스트 리팩토링 (비즈니스 로직 변경 X)
🔖 Chore            : 빌드 태스크 업데이트, 패키지 매니저 설정할 경우 (비즈니스 로직 변경 X)
📝 Rename           : 파일 혹은 폴더명을 수정, 옮기는 작업만
🔥 Remove           : 사용하지 않는 파일 혹은 폴더를 삭제하는 경우
📌 Init             : 초기 생성
🚑 !BREAKING CHANGE : 커다란 API 혹은 로직 변경
🔔 Merge Request    : Merge Request 생성(Branch 병합, Conflict 해결 등)
```

### 2. PR 기록 남기기 (혼자 작업하더라도!)

## Storybook

### 1. 목표

- 디자이너, 프론트엔드 개발자와 소통하기 위해 구축했습니다.
- 컴포넌트를 설계한 후 Storybook을 통해 리뷰하고 피드백 받을 수 있습니다.

### 2. 실행

```
npm run storybook
```

### 2. 빌드

```
npm run build-storybook
```

## MSW

### 1. 목표

- 백엔드 API 배포 이전, 프론트엔드 개발을 위한 API Mocking 작업을 할 수 있습니다.
- 백엔드팀과 Response를 충분히 협의 후 병행 작업이 가능하여 공수일자를 줄일 수 있습니다.
- 반대로 프론트엔드에서 Response를 제안할 수도 있습니다.

### 2. 원리

- Service Worker가 네트워크 요청을 가로채서 미리 정의된 Mock 데이터를 응답합니다.
- 실제 API 요청처럼 동작하므로 MSW의 Mock 데이터로 실제 프론트엔드 개발을 할 수 있습니다.

### 3. 실행

```
npm run msw
```

## Cypress

### 1. 목표

- Cypress를 활용하여 테스트 코드를 작성하여 TDD 개발법을 적용합니다.
- Cypress Cloud를 연동하여 E2E 테스트를 거쳐 프로젝트가 배포 되도록 CI/CD를 구축하여 안정성 있는 프로젝트 버전을 제공합니다.
- Cypress Cloud를 연동하여 테스트 성공/실패 여부를 모니터링합니다.

### 2. 실행

```
npm run cypress
```

## ESLint

### 1. 실행

- ESLint가 자동으로 수정할 수 있는 문제를 찾아서 수정합니다.
- 단, 개발자의 의도가 있을지도 모르는 일부 오류는 수동 수정을 할 수 있도록 알려줍니다.

```
npm run lint:fix
```

- 프로젝트 전체의 코드 스타일 및 문법 오류를 검사합니다.
- 이 프로젝트에서는 dev, main 브랜치로 PR 등록할 경우 자동으로 검사합니다.

```
npm run lint
```

## 자격저격 웹사이트 접속

https://quartet-sigma.vercel.app/
