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

### 2026-05-31

- [x] **BudgetChart 컴포넌트** (`pages/chart/BudgetChart.tsx`) — ECharts 영역(스파크라인) 차트
  - `echarts-for-react`의 `<ReactECharts>` 사용 (useRef/useEffect 안 씀)
  - 풀블리드: `grid` 여백 0 + `boundaryGap:false` + 축 `show:false` + `symbol:"none"` + `smooth`
  - 그라데이션은 plain object(`type:"linear"...colorStops`)
  - **props로 재사용**: `kind: "expense" | "budget"` 따라 파랑/빨강 분기 (껍데기 1개 + 변형 N개 패턴 검증)
- [x] **Dashboard 카드 6개 퍼블리싱** (`grid-cols-4 grid-rows-2`, 일정 카드 `row-span-2`)
  - 예산/지출(BudgetChart), 전자결재(AG-Grid), 일정(리스트 예정), 가계지출현황(예정), Plan, 가족구성원(AG-Grid)
  - 아이콘 = `react-icons/md`, 원형 틴트 배경(`bg-[색]/5`) + 아이콘 색
  - **6색 팔레트**: 파랑(예산)·빨강(지출)·보라(전자결재)·앰버(일정)·틸(Plan)·로즈(가족) — 의미별 색코딩
- [x] **AG-Grid v35 셋업** (전자결재·가족구성원 카드)
  - 모듈 등록 `ModuleRegistry.registerModules([AllCommunityModule])` (MainLayout.tsx)
  - `themeQuartz.withParams`로 테두리 커스텀 (v33+ Theming API — CSS import·theme class 안 씀)
  - `defaultColDef`: `flex`(폭 비율), `resizable:false`(핸들 제거), `cellStyle` 가운데정렬
  - 헤더 가운데는 `headerClass` + 전역 CSS(`.ag-header-cell-label{justify-content:center}`)
  - TS: 행 타입 정의 후 `ColDef<RowType>[]` (field literal widening 에러 회피)
- [x] 학습 기록: `archive/개념파악.md` 2026-05-31 섹션에 9개 개념 정리 (import 종류, useState, ECharts, TS props, props vs state, xAxis, 타입추론, AG-Grid 셋업/스타일링)
- [x] 일정 카드 리스트 방식 검토 — Toast UI엔 list 뷰 없음(month/week/day만). **직접 map + Tailwind** 로 가기로 (MUI List는 디자인 톤 섞임)

---

## 다음 작업 예정

> **다음 세션 재개 지점**

### 1순위 — Dashboard 내용 마무리 (이번 목표)
- [ ] **일정 카드** 리스트 (`map` + Tailwind, `divide-y`로 행 구분선) — 일정 데이터 배열 구조부터
- [ ] **2026년 가계 지출 현황 카드**(cd5) 내용 채우기 (차트 등)
- [ ] **Plan 카드**(cd6) 내용 채우기
- [ ] 카드 껍데기 반복 보이면 `<DashboardCard title icon kind>` **컴포넌트로 추출** (지금은 손으로 다 그려둔 상태 → 추출 타이밍)
- [ ] 정리: `id` 중복/콘텐츠 div id 정리 (일부 정리됨), 일정 카드 아이콘 원형 래퍼(cd4_tit 비어있음)

### 2순위 — 데이터를 axios로 가져오기
- [ ] 먼저 **JSON 데이터 파일** 만들어두고 (mock), axios로 fetch하는 형태로 전환 (지금은 컴포넌트에 하드코딩)
  - 데이터 소유: 부모가 state로 들고 자식엔 props ([[props vs state]] 원칙)
  - `useEffect`에서 fetch → state set 패턴 학습 포인트
- [ ] **나중에 실제 서버**로 이어붙이기 (JSON → API 엔드포인트 교체)

### 3순위 — 가계부 화면 Try
- [ ] Figma 가계부 / 가계부 보고서 화면 퍼블리싱 (AG-Grid + ECharts 조합 예상)

### 그 외 (보류)
- [ ] 탭 ↔ 라우트 연결 (`navigate` + `useLocation`), 메뉴 클릭 → 탭 추가(Context)
- [ ] 로그인 기능 (입력값 state), 비밀번호 보기/숨기기

---

## Figma 화면 목록

| 화면 | 상태 |
|------|------|
| 로그인 | ✅ 완료 |
| 회원가입 | ⬜ 미작업 |
| 비밀번호 찾기 | ⬜ 미작업 |
| 대시보드 | 🟡 진행중 (쉘+탭+카드 6개 퍼블리싱, 일부 카드 내용 채우는 중) |
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
