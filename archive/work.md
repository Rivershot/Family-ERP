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

### 2026-06-01

- [x] **ExpenseChart 컴포넌트** (`pages/chart/ExpenseChart.tsx`) — Figma 디자인 맞춤 가로 막대 차트 (cd5)
  - **가로 막대 = 축 뒤바꿈**: xAxis=value, yAxis=category(월). `yAxis.inverse:true`로 Jan을 맨 위로
  - 막대별 색: `palette` 배열 → `data.map`으로 `{value, itemStyle:{color, borderRadius}}` 객체배열 변환 (Jan·Mar·Jun 코랄, 나머지 파랑)
  - **알약 모양**: `barWidth:12` + `borderRadius:6`. 값 라벨 `label.formatter`로 천단위 콤마(`toLocaleString`)
  - 축·격자 숨김(`xAxis.show:false`, yAxis `axisLine/axisTick` 제거) + `grid.containLabel`로 좌우 라벨 여백
- [x] **PieChart 컴포넌트** (`pages/chart/PieChart.tsx`) — 도넛 차트 (Plan 카드 cd6), ECharts `pie-padAngle` 예시 기반
  - 도넛: `radius:["50%","70%"]` + `padAngle:3` + `itemStyle.borderRadius:6`
  - **가운데 고정 텍스트**: `graphic` text 요소(`style.text`에 글자, `left/top:center`) — 데이터·hover와 무관하게 고정
  - 라벨/지시선 제거: `label`·`labelLine` **normal + emphasis 양쪽** 다 `show:false` (오타 `lable` 주의)
- [x] **가족구성원 그리드에 아바타 cellRenderer** (cd7) — AG-Grid `cellRenderer`로 한 셀에 이미지+이름
  - `params.data`로 행 전체 접근 → `<img rounded-full>` + `<span>{name}</span>` flex 배치
  - 아바타 SVG 4개를 `public/avatars/`에 두고 path(`/avatars/avatar1.svg`)로 참조 (import 방식 대신)
- [x] cd5 제목-차트 간격 조정(`h-20`→`pt-4 h-15`), 카드 콘텐츠 높이 정리(cd5 260px, cd7 240px)
- [x] 학습 기록: `archive/개념파악.md` 2026-06-01 섹션 — type/function 이름충돌, 빈배열 타입주석(ts7034), 타입주석 판단기준, import 대소문자(TS1261), 콜백(함수를 값으로), ECharts normal vs emphasis, label vs tooltip

### 2026-06-22

- [x] **일정 카드(cd4) 완성** — 대시보드 마지막 카드. 구현 방식 = **직접 `ul`+map**(MUI는 다음 화면부터 적용하기로)
  - **날짜별 그룹핑**: `reduce`로 `{ "20260622": [...] }` 만들기 (`acc[date] ??= []` + push). 렌더는 `Object.entries(group).map` (바깥=날짜그룹, 안=일정) 중첩 map
  - **`dateLabel` 헬퍼**: 오늘과의 **일수 차이(diff)** 계산 → `{0:"Today",1:"내일"}[diff] ?? "월 일"` (lookup 객체 + `??` 패턴). 함정: Date끼리 빼기 불가(`+date`), `month-1`, `new Date(year,month-1,day)`
  - 카테고리→색점 매핑(`categoryColor` lookup), 시간 포맷(`"0830"→"08:30"` slice), 링크 **조건부 렌더**(`link && ...`) + 화상 아이콘 배지
  - cd4_tit 아이콘 앰버 틴트 원형 래퍼(다른 카드와 통일)
- [x] **Figma 스타일링** (node 20-805 스펙 기반) — px÷4 → Tailwind 변환, `text-[13px]`/`gap-2`/`pl-5` 등
- [x] **Plan 카드(cd6) 차트 높이 정리** — PieChart `height:260` → `height:"100%"`, cd6_content `flex-1 min-h-0` (위아래 균형)
- [x] **대시보드 레이아웃 높이 채움** — Dashboard 바깥 `h-full flex flex-col` + 그리드 `flex-1 min-h-0` → 콘텐츠 카드 높이 꽉 채우고 스크롤 제거 (`grid-rows-2` = 1fr 1fr 균등분할). **`flex-1 min-h-0` + 자식 `height:100%`** = 부모 높이에 맞추는 범용 레시피
- [x] **TS 타입 정리** — `Schedule` 타입 선언, `reduce<Record<string, Schedule[]>>` 제네릭, 데이터에 `id` 추가(key용, DB PK 대비)
- [x] **🎉 대시보드 7개 카드 전부 완료**

### 2026-06-23

- [x] **모던 JS 기초돌파 커리큘럼 신설** (`js-기초돌파/`) — `00-커리큘럼.md` 인덱스 + 1단계(01~05) 작성 + ES6 이후 확장 로드맵(2~5단계)·ES 버전별 색인. 막힘 8할이 모던 JS라는 판단에서 출발.
  - 01 배열 순회/변환, 02 reduce 학습 + 채점 **4/4**(`풀이-채점기록.md`). 03~05는 다음.
- [x] **🎯 work.md 1순위 — axios 데이터 fetch 완료** (하드코딩 → mock JSON + 통신)
  - **비동기 3박자**: `useState([])` 빈 그릇 → `useEffect(()=>{...},[])` 최초 1회 → `axios.get(url).then(res => setX(res.data))`. (상세 [[개념파악]] 2026-06-23)
  - `public/mock/`에 `schedule.json`·`expense.json`·`pieData.json` 작성. **public 경로 함정**: URL은 `/mock/..`(public 빠짐).
  - 3종 전환: **schedule**(객체배열) / **expense**(숫자배열) / **pieData·pieName**(객체배열 → `Object.values`/`keys`로 분해).
  - **axios 타입**: `res.data`는 기본 `any` → `.map` 시 implicit any 에러 → `axios.get<Record<string,number>[]>`로 출처에서 타입 박기.
- [x] (정정) 대시보드 라우트는 `/dash`가 아니라 **`/dashboard`** (`App.tsx`).

### 2026-06-24

- [x] **모던 JS 03·04강 학습 완료** (`js-기초돌파/`, 채점 `풀이-채점기록.md`)
  - **03 탐색·정렬 2/4**: `find`/`some` 메서드 선택은 OK. 약점=**불변성** — `sort`를 `[...members]` 복사 없이 원본 직접 mutate(3번), 정작 4번엔 "새 배열로 받아야"라 써서 **3↔4 모순**. 핵심: `sort`/`reverse`/`splice`는 원본 변경 → state엔 항상 `[...arr].sort()`.
  - **04 단축평가**: 6·7·8 만점(`?.`, `??` 선택, `??=` 풀어쓰기 — 8번은 모범답안보다 정확). 5번 예측 3/5. 약점=**`||` vs `??` falsy 차이** — `||`는 falsy 7개 전부에서 오른쪽, `??`는 null/undefined만. 숫자0·빈문자 살리려면 `??`.
- [x] **lookup 객체 패턴 심화 Q&A** — `{...}[diff] ?? 기본값`에서 `diff`가 **문법 아니라 변수**임을 명확히. 04강 6번 예시를 `dateLabel(diff,month,day)` **함수 파라미터 형태**로 수정(사용자 피드백 반영). `ReferenceError`(미선언 변수) / `SyntaxError`(객체 리터럴 문장 앞) / `TypeError` 구분 정리.
- [x] **실전 Q&A** — (1) state 불변성·스프레드와 성능: 조회는 복사 불필요(`map`/`filter`는 새 배열 반환), 복사는 mutate+setState 때만이고 얕은 복사라 쌈. 불변성=변경감지(O(1) 참조비교) 장치. 진짜 최적화는 `useMemo`. (2) `options.x || 기본값` 레거시 관습 — 0/false/""가 유효값일 수 있으면 `??`로 가야(버그 회피).
- [x] **2순위 B — 차트/그리드 고정 px 정리 완료** (Playwright로 검증). cd3(전자결재)·cd7(가족구성원) AG-Grid가 **높이 0으로 찌부**돼 있던 것 수정 — 원인: 고정 px만 제거하고 **레시피 2단계(`flex-1 min-h-0` 추가)를 빠뜨림**. `flex-1`(남는 공간 채움)+`min-h-0`(콘텐츠 핑계로 안 줄어드는 기본 제한 풀기) 세트가 핵심. cd5는 이미 적용돼 있었음. → 7카드 전부 레시피 통일, 높이 0→229/237px.
- [x] **2순위 C — 마크업 찌꺼기 정리 완료**. id **중복 없었음**(cd1~7 유니크, CSS/JS 미참조 = 순수 라벨 → A 추출 때 자연 소멸 예정이라 보존). 리팩토링 잔여물 정리: 빈 `className=""`×2(cd1·cd2), 불필요한 `style={{width:"100%"}}`×2(cd3·cd7 — `flex-col` 자식 기본 stretch라 불필요).
- [x] **Tailwind 동작 Q&A** (Playwright로 직접 증명) — **spacing 스케일**: `숫자×4px`(`px-2`=좌우 각 8px, "한쪽당" 값이지 좌우 합 분배 아님). **JIT/on-demand**: 소스에 적힌 클래스만 CSS 생성 → 개발자도구에서 `px-7`로 바꾸면 `.px-7` 규칙 자체가 없어 padding 0(왼쪽 붙음), 소스에 쓰면 HMR이 28px 생성. 동적 조합(`px-${n}`)은 스캔 못 함 주의.

## 다음 작업 예정

> **다음 세션 재개 지점**
>
> **병행 학습:** 모던 JS 기초돌파 커리큘럼(`js-기초돌파/`) — **05 구조분해·스프레드** 이어서. (01·02 4/4, 03 2/4, 04 거의 만점 완료) 4단계 비동기는 이미 실전(axios)으로 맛봄. 프로젝트 막힘의 8할이 여기였음. 05에서 `[...arr]`(스프레드) ↔ "구조분해" 용어 혼동 확실히 정리 예정.

### ✅ 1순위 — 데이터를 axios로 가져오기 (2026-06-23 완료)
- [x] mock JSON(`public/mock/`) + axios fetch 전환 — schedule·expense·pieData 3종. 비동기 3박자 + public 경로 + axios 타입(`get<T>`) + `Object.keys/values`. (상세 개념파악·완료작업 참고)
- 남은 갈래(원하면): 부모가 state로 들고 자식엔 props 내리는 구조([[props vs state]])는 아직 Dashboard 한 컴포넌트 안 — 2순위 컴포넌트 추출 때 자연스럽게 분리.

### 2순위 — Dashboard 마무리 정리
- [ ] **(A, 남음) 카드 껍데기 반복 → `<DashboardCard title icon kind>` 컴포넌트로 추출** ← 다음 세션 시작점. 큰 작업(props 설계 + 7카드 교체, [[props vs state]] 실전). id(cd1~7)도 이때 자연 소멸.
- [x] (B) cd3·cd5·cd7 고정 px → `flex-1 min-h-0` 레시피 정리 (2026-06-24 완료, Playwright 검증)
- [x] (C) 마크업 찌꺼기 정리 — 빈 className·불필요 inline style 제거. id 중복은 없었음 (2026-06-24 완료)

### 4순위 — 가계부 화면 Try
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
| 대시보드 | ✅ 완료 (카드 7개 전부 — 예산/지출/전자결재/일정/지출현황/Plan/가족구성원) |
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
