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

### 2026-06-29

- [x] **모던 JS 커리큘럼 2015~2025 확장** (`js-기초돌파/00-커리큘럼.md`) — 23→27장 로드맵, **⛏️ 원리 심화 코너** 도입(실무 먼저, 원리는 나중/선택), ES2024·2025 색인 추가. 추가 주제: **10 클래스·11 Symbol/이터레이터/제너레이터·15 Object.groupBy(ES2024)·13 Set메서드(ES2025)·18 JSON·21 에러처리** + 08 call/apply/bind 보강.
- [x] **JS 06~10강 본문 작성** — 06 변수/스코프(호이스팅·TDZ), 07 값과참조(`===`주소비교=React변경감지), 08 ⛏️함수깊이(this·`call/bind`·**클로저=useState원리**·stale closure), 09 템플릿/매개변수(구조분해 매개변수=React props), 10 클래스(`extends`·`#private`·커스텀에러).
- [x] **JS 05~09강 학습+채점 완료** (`풀이-채점기록.md`) — 05 결론 전부 정답(3번 객체리터럴 `=`→`:`), 06 4/5(약점 **var 호이스팅=undefined**), 07 **5/5**(얕은/깊은복사 사전 Q&A 효과), 08 4/4(**클로저** Q&A로 "x는 미리 굽고 y는 나중에" 잡음), 09 **5/5**(구조분해 매개변수=props 스스로 연결). **반복 약점: 변수명 철자**(memeber 등).
- [x] **심화 Q&A** — 얕은/깊은 복사(차이는 "참조 vs 값"이 아니라 **깊이**, 원시값은 어차피 값복사 → 갈리는 건 중첩객체) / 클로저 동작(파라미터 채워지는 시점이 다름) / 구조분해 변수 스코프(선언자=`const`/`let`이 정함, 구조분해는 꺼내기 문법일 뿐) / `some` vs `every`.
- [x] **React 실전 트랙 신설** (`react-실전/`) — `00-커리큘럼.md`(16장 로드맵 + **UI=f(state) 사고모델**, 가계부 기능별 폼→CRUD→커스텀훅→useReducer→Context) + **01 제어컴포넌트·폼** 본문 작성.
- [x] **🎯 탭 시스템 구현** (메뉴 클릭 → 탭 오픈) — **MainLayout이 `tab[]`·`activeTab` state 보유 + `openTab` 콜백을 `<Side onMenuClick=>`로 내림**(state 끌어올리기 + 콜백 props, react-실전 07강 실전). **Redux 불필요** 결론 — Side가 직속 자식이라 props로 충분(에스컬레이션 사다리: props→Context→useReducer→Zustand, Redux는 이 프로젝트엔 과함).
  - 03강 `some`(중복 탭 방지) + 05강 스프레드(`[...tab, 새탭]` 불변 추가) **실전 적용**.
  - **버그 교정 3건**: (1) 탭바 버튼 `onClick`이 `setTab([하나])`로 **목록 통째 교체**→다른 탭 사라짐 → `setActiveTab`만. (2) 대시보드 하이라이트 안 켜짐 — id"dashboard"/label"DashBoard"/메뉴"Dashboard" **3문자열 불일치**(`===` 대소문자) → 메뉴를 `{id,label}` 객체로 통일 + 비교는 항상 `id`로. (3) 가계부 중복 id `schedule` → `ledger`.
  - 메뉴 id 영단어 정리: family·evaluation·request·schedule·ledger.
- [x] **`.vscode/settings.json`** — 학습용 AI 자동완성(ghost text·Copilot) 끄기(이 워크스페이스만), IntelliSense는 유지.

### 2026-07-01

- [x] **🎯 탭 콘텐츠 전환 + 라우터 연결 완료** (3순위) — 탭 바꿔도 대시보드만 나오던 걸 실제 화면 전환까지.
  - **1단계 분기 렌더**: `<Outlet/>` 자리에 lookup 객체(`{...}[activeTab] ?? <DashBoard/>`)로 화면 선택. cd4 `dateLabel`·탭시스템에서 쓴 패턴 재사용.
  - **2단계 라우터 연결(길 B 채택)**: 분기 lookup은 App.tsx 라우트와 **중복**이라 폐기 → 다시 `<Outlet/>`으로 되돌리고 **화면 결정은 라우터에 위임**. MainLayout은 탭 목록 + 하이라이트만 담당. Side 메뉴 객체에 `url` 필드 추가(`{id,label,url}`, 타입도 양쪽 확장), `navigate(menu.url)`로 URL 변경.
  - **3단계 `useLocation`으로 단일 진실화**: `activeTab` state **제거** → 하이라이트를 `location.pathname === t.url`로 **URL에서 파생**. 덕분에 뒤로가기/새로고침/주소창 직접입력에도 하이라이트 자동 정렬(state 시절엔 안 됐던 것). **`tab` 배열(열린 탭 목록)은 URL에 없는 정보라 state 유지** — "활성 탭=URL 파생 / 열린 목록=state" 역할 분리.
  - **Playwright 검증**: 가계부 클릭→`/ledge`+탭 추가+하이라이트 이동, **뒤로가기→`/dashboard`+하이라이트 자동 복귀** 확인.
  - **버그 교정**: (1) `focusTab` early-return이 `t.id === location.pathname`(아이디↔경로, 영원히 불일치) → `t.url === location.pathname`로. (2) 변수 섀도잉 정리 `tab.map((tab)=>)` → `(t)=>` (바깥 state 배열 가림 방지). (3) 메뉴 url `/ledge` ↔ App.tsx 라우트 대소문자 일치 확인.
  - **개념 Q&A**: StrictMode 렌더 2회(개발 전용 순수성 검사, 화면은 1회) / 섀도잉(같은 이름=안쪽이 바깥 가림, 접근 불가) / `useLocation`(현재 URL 읽기+URL 변경 시 리렌더 → 중복 state 제거) / navigate 인자 = App.tsx `<Route path>`와 동일해야.
- [ ] **알려진 한계(다음)**: 미개발 메뉴(family·evaluation·request·schedule)는 라우트 없어 클릭 시 빈 화면 / 새로고침 시 `tab` 목록 초기화(메모리 state). 필요 시 sessionStorage·URL 확장.
- [ ] **Figma MCP 순서 함정 기록** — figma 서버(`npx figma-developer-mcp`)를 **Claude Code 시작 후**에 띄우면 세션에 툴이 안 붙음. 반드시 **CC 시작 전 서버 먼저**. 오늘 순서 반대라 재시작 예정. [[feedback_figma_mcp]]

## 다음 작업 예정

> **다음 세션 재개 지점**
>
> **프로젝트 재개 지점:** 탭 라우터 연결 **완료**. 다음 = **가계부 화면 착수** — Figma에 이미 그려둔 가계부 화면 있음. **껍데기는 Figma로 퍼블리싱**(figma MCP 스펙 추출, 단 CC 시작 전 서버 먼저!), **폼 입력 로직만 react-실전 01강(제어 컴포넌트)** 으로 의식하며 얹기(정적 퍼블리싱 ≠ 학습대상, 폼 상태제어 = 학습대상). 순서: ①Figma 레이아웃/그리드/폼UI → ②입력창을 `useState` value+onChange 제어 컴포넌트로 → ③제출 시 `[...list, 새항목]` CRUD. `Ledge.tsx`는 현재 빈 껍데기.
> **병행 학습 ①(JS):** `js-기초돌파/` — **01~09강 학습+채점 완료**(채점기록 참고. 07·09 만점, 06 4/5 var호이스팅, 08 클로저 잡음). **남은 본문: 10 클래스**(작성됨, 풀기만) → 그 뒤 11~27은 로드맵 체크박스. **반복 약점: 변수명 철자**. 로드맵 2015~2025(06~27장, ⛏️ 원리심화).
> **병행 학습 ②(React):** `react-실전/` — `00-커리큘럼.md`(16장 + UI=f(state)) + **01 제어컴포넌트·폼** 작성됨. 탭 시스템으로 **07강(state 끌어올리기+콜백 props) 이미 실전 경험**. 다음 풀 것=01 폼. Dashboard 중복 useEffect+axios → 09장 `useFetch`로 리팩토링 예정.

### ✅ 1순위 — 데이터를 axios로 가져오기 (2026-06-23 완료)
- [x] mock JSON(`public/mock/`) + axios fetch 전환 — schedule·expense·pieData 3종. 비동기 3박자 + public 경로 + axios 타입(`get<T>`) + `Object.keys/values`. (상세 개념파악·완료작업 참고)
- 남은 갈래(원하면): 부모가 state로 들고 자식엔 props 내리는 구조([[props vs state]])는 아직 Dashboard 한 컴포넌트 안 — 2순위 컴포넌트 추출 때 자연스럽게 분리.

### 2순위 — Dashboard 마무리 정리
- [ ] **(A, 남음) 카드 껍데기 반복 → `<DashboardCard title icon kind>` 컴포넌트로 추출** ← 다음 세션 시작점. 큰 작업(props 설계 + 7카드 교체, [[props vs state]] 실전). id(cd1~7)도 이때 자연 소멸.
- [x] (B) cd3·cd5·cd7 고정 px → `flex-1 min-h-0` 레시피 정리 (2026-06-24 완료, Playwright 검증)
- [x] (C) 마크업 찌꺼기 정리 — 빈 className·불필요 inline style 제거. id 중복은 없었음 (2026-06-24 완료)

### 4순위 — 가계부 화면 Try
- [ ] Figma 가계부 / 가계부 보고서 화면 퍼블리싱 (AG-Grid + ECharts 조합 예상)

### 3순위 — 탭 시스템 (진행 중)
- [x] 메뉴 클릭 → 탭 추가/중복방지/전환 (state 끌어올리기 + 콜백 props + `{id,label}` 객체 전달). 2026-06-29 완료.
- [x] **탭 콘텐츠 전환 + 라우트 연결** — `<Outlet/>` + `navigate(url)` + `useLocation` 파생 하이라이트. 2026-07-01 완료(상세 위 로그).
- [ ] 탭 닫기(X 버튼, `filter`로 제거), 새로고침 시 탭 목록 유지(sessionStorage 등), 메뉴 클릭→탭 추가를 깊은 곳에서도 쓰면 Context로 승급.

### 그 외 (보류)
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
