# Family ERP

가족 구성원의 일상을 통합 관리하는 ERP 시스템입니다.
일정, 가계부, 자산관리, 전자결재, 인사관리 등 가족의 삶을 하나의 플랫폼에서 관리할 수 있습니다.

---

## 주요 기능

- **일정 관리** — 개인/그룹 일정 등록, 일/주/월별 보기, 알림, QR 공유
- **가계부** — 수입/지출 관리, 카테고리별 조회, 월말 보고서, 차트
- **자산 관리** — 공동자산 등록/관리, 사용 신청
- **전자결재** — 결재 요청/승인/반려, 파일 첨부, 히스토리
- **인사 관리** — 구성원 관리, 인사평가, 성장일지
- **요청** — 휴가 신청, 용돈 인상 요청 (기안문 형태)
- **AI 기능** — 주간 리포트, 소비 습관 분석, 일정 피드백

---

## 기술 스택

| 영역 | 기술 |
|------|------|
| Frontend | React + TypeScript |
| CSS | TailwindCSS |
| UI Library | Material UI |
| Grid | AG-Grid |
| Calendar | Toast UI Calendar |
| Chart | Apache ECharts |
| 라우팅 | React Router DOM |
| API 통신 | Axios |
| 빌드 | Vite |
| 배포 | AWS |

---

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

---

## 프로젝트 구조

```
src/
├── components/     # 공통 재사용 컴포넌트
├── pages/          # 페이지 컴포넌트
│   └── auth/       # 로그인, 회원가입, 비밀번호 찾기
├── layouts/        # 레이아웃 (AuthLayout, MainLayout)
├── hooks/          # 커스텀 훅
├── utils/          # 공통 유틸 함수
└── assets/         # 이미지, 아이콘
```
