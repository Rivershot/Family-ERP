# Family ERP — 작업 현황

## 프로젝트 목적

가족 구성원의 일상을 통합 관리하는 ERP 시스템. 일정, 가계부, 자산관리, 전자결재, 인사관리 등을 하나의 플랫폼에서 관리한다.

**참여자:** 박채원, 가민지

---

## 스터디 목적

이 프로젝트는 **React를 학습하고 실전에서 다루는 능력을 키우기 위한 사이드 프로젝트**다.
Claude는 직접 코드를 짜주기보다 방향을 제시하고 질문에 답변하는 선생님 역할을 한다.
사용자가 직접 작성하고, 막히는 부분만 질문하는 방식으로 진행한다.

---

## 참고 자료

- **요구사항:** https://docs.google.com/spreadsheets/d/1L-CN1jYihsMibvAZNXCP4FJXBd9tmDlwPBUS9VorY-U
- **회의록:** https://docs.google.com/document/d/15xVxWe4_wow1GZMFaoTKQuCVojt6rGA11qL_O5jJ52A
- **Figma:** https://www.figma.com/design/7eO5eGBGVJUBz4ZAFD3G7i/ERP
- **GitHub:** https://github.com/Rivershot/Family-ERP.git
- **DB 설계:** https://drawsql.app/teams/mw-15/diagrams/ferp

---

## 기술 스택

| 영역 | 기술 |
|------|------|
| Frontend | React + TypeScript (Vite) |
| CSS | TailwindCSS |
| UI Library | Material UI |
| Grid | AG-Grid |
| Calendar | Toast UI Calendar |
| Chart | Apache ECharts |
| 라우팅 | React Router DOM |
| API 통신 | Axios |
| 배포 | AWS |
| Auth | JWT + 카카오 로그인 |

---

## 완료된 작업

- [x] Vite + React + TypeScript 프로젝트 세팅
- [x] TailwindCSS 설치 및 설정
- [x] 라이브러리 설치 (MUI, AG-Grid, Toast UI Calendar, ECharts, Axios, react-icons)
- [x] 폴더 구조 구성 (components, pages, layouts, hooks, utils, assets)
- [x] AuthLayout, MainLayout 레이아웃 구성
- [x] React Router 라우팅 설정 (/, /login, /register, /forgotPassword)
- [x] 로그인 페이지 UI 구현
  - 글래스모피즘 카드 스타일
  - Username / Password 입력 필드
  - Remember me 체크박스
  - 로그인 버튼 (그라디언트)
  - 비밀번호 찾기 링크
  - Or 구분선 + 소셜 로그인 (Google, Facebook, Kakao)
  - Signup / Terms & Conditions / Support / Customer Care
  - Figma 배경 이미지 적용
- [x] GitHub 연동 및 초기 커밋
- [x] 회원가입 페이지 UI 구현 (RegisterPage.tsx)
  - 로그인과 동일한 글래스모피즘 카드 스타일
  - Username / Email / Password / Confirm Password 입력 필드
  - Signup 버튼 (파랑 계열 그라디언트, Figma 색상 적용)
  - Or 구분선 + 소셜 로그인
  - Already Registered? Login / Terms & Conditions / Support / Customer Care
- [x] 비밀번호 찾기 페이지 UI 구현 (ForgotPasswordPage.tsx)
  - Email 입력 필드
  - 비밀번호 리셋하기 버튼 (핑크-레드 그라디언트, Figma 색상 적용)
- [x] 로그인 버튼 → /dashboard 이동 (useNavigate)
- [x] MainLayout 구성 (Outlet 기반, Header + Side + main 영역 분리)
- [x] Header.tsx 라이트 테마 디자인
  - 흰 배경 + 하단 border + shadow
  - 로고 보라색 + 네비게이션 메뉴 + hover 효과
  - 오른쪽 프로필 아이콘 영역
- [x] Side.tsx 라이트 테마 디자인
  - 흰 배경 + 오른쪽 border
  - 메뉴 hover 시 보라 인디케이터 바 + 배경/텍스트 색상 변경

### 2026-05-27

- [x] Playwright MCP 설치 (user 스코프) — dev 서버 띄우고 브라우저로 UI 확인/테스트
- [x] MainLayout 쉘 퍼블리싱 (Figma Business Component 기준)
  - 바깥 배경 `#F7F9FB`
  - Side / Content를 흰색 **카드**로 (border + shadow + radius → 입체감)
  - Content 카드 `rounded-[25px]`, 상단에 탭 바 pill(`rounded-full`) 영역 추가
- [x] Side.tsx: `self-start`로 메뉴 개수만큼만 높이, hover 음영 `violet-50` + 인디케이터 바 `violet-700`
- [x] 탭 시스템 기초: `tab` 배열 + `activeTab`(useState) + `map` 렌더링
  - 활성 탭 = violet 그라데이션 텍스트(`bg-clip-text`) + 밑줄(`border-b-2`), 비활성은 투명 보더로 레이아웃 안 밀림
- [x] 라우팅: `/dash` → `DashBoard`(Outlet 렌더), `/dashboard` → `/dash` 리다이렉트
- [x] Dashboard.tsx 카드 구성 착수 (스케치 단계 — 껍데기 + 아이콘/콘텐츠 구획)

---

## 다음 작업 예정

> **다음 세션 재개 지점**

- [ ] **탭 ↔ 라우트 연결**: 탭 클릭 시 `navigate(path)`, 활성 여부는 `useLocation`으로 판단 (현재 `activeTab` state와 실제 라우트가 따로 놂)
- [ ] **메뉴 클릭 → 탭 추가** 로직 (중복 방지). Side ↔ MainLayout 공유는 **Context(`TabContext`)** 권장
- [ ] **Dashboard 카드 완성**
  - 껍데기에 `bg-white p-4 shadow-sm` 적용, 여러 카드는 `grid` 배치 고려 (크기 다양 → `col-span`)
  - 카드 반복 보이면 `<DashboardCard title icon>` 컴포넌트로 추출 (지금은 손으로 1~2개 먼저)
  - 카드 안 반복(진행바·일정 목록)은 `map`
- [ ] 로그인 기능 구현 (useState, 입력값 상태관리)
- [ ] 비밀번호 보기/숨기기 기능
- [ ] 메인 페이지들 (일정, 가계부, 전자결재 등)

---

## Figma 화면 목록

| 화면 | 상태 |
|------|------|
| 로그인 | ✅ 완료 |
| 회원가입 | ⬜ 미작업 |
| 비밀번호 찾기 | ⬜ 미작업 |
| 대시보드 | 🟡 진행중 (쉘+탭 완료, 카드 작업 중) |
| 일정 | ⬜ 미작업 |
| 가계부 | ⬜ 미작업 |
| 가계부 보고서 | ⬜ 미작업 |
| 전자결재 | ⬜ 미작업 |
| 전자결재 등록 | ⬜ 미작업 |
| 성장일지 | ⬜ 미작업 |
| 요청 | ⬜ 미작업 |
| 인사(Administration) | ⬜ 미작업 |
| 관리자 | ⬜ 미작업 |

---

## MCP 설정

Figma MCP가 설정되어 있음. Claude Code 시작 전 터미널에서 먼저 실행 필요:
```bash
npx figma-developer-mcp &
```
API 키는 프로젝트 루트 `.env` 파일에 저장되어 있음 (git에서 제외됨)
