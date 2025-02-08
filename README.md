## 프로젝트명 (정할예정!)

### 1. 프로젝트 정보

- 기술스택 : React, TypeScript, Vite
- 상태관리 : useState, recoil
- API 호출 : axios
- 스타일 : scss
- 라이브러리 : 추후 추가 예정
- 패키지 관리자 : npm

### 2. 프로젝트 설명

- 취업준비생을 위한 취업정보 웹사이트입니다.
- 더 추가 할 예정...

### 3. 프로젝트 폴더 구조

```
/src
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
│ ├── license // 자격증 페이지
│ └── index.ts // 프로젝트 진입점
├── App.tsx // axios 인터셉터, 토큰 관리
├── vite.config.ts // 백엔드 프록시 설정
└── main.tsx  // 애플리케이션 최초 실행 모듈
```

### 4. 컴포넌트 폴더 구조

- Api: API 호출 로직을 관리하는 폴더
- Container: 페이지 컨테이너를 관리하는 폴더
- Store: 상태관리 및 핸들러 함수를 관리하는 폴더
- View: 해당 페이지에서 사용할 컴포넌트를 관리하는 폴더

### 4. 프로젝트 실행

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

## 기타

### 1. 코드 컨벤션

Single Quote 사용 외에 나머지는 아직 고민 중입니다...!
