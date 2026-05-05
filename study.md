# React Study Notes

## 1. Interface와 Props (TypeScript)

### JSX (JavaScript)
타입 선언 없이 바로 사용 가능
```jsx
function AuthLayout({ children }) {
  return <div>{children}</div>
}
```

**단점**
- `children`에 어떤 타입이 들어와도 에러가 나지 않음
- 버그가 런타임에서야 발견됨
- 협업 시 어떤 값을 넘겨야 하는지 알기 어려움

---

### TSX (TypeScript)
`interface`로 타입을 명시해야 함
```tsx
interface Props {
  children: React.ReactNode
}

function AuthLayout({ children }: Props) {
  return <div>{children}</div>
}
```

**장점**
- 잘못된 타입 전달 시 컴파일 단계에서 에러 감지
- 어떤 값을 넘겨야 하는지 코드만 봐도 명확함
- IDE 자동완성 지원

---

### children vs 일반 Props 차이

| 구분 | 설명 | 사용 방법 |
|------|------|----------|
| `children` | 태그 사이에 들어오는 자식 컴포넌트 | `<Layout><Page /></Layout>` |
| 일반 Props | 태그 속성으로 전달하는 값 | `<Layout title="로그인">` |

둘 다 `interface`에 함께 선언 가능
```tsx
interface Props {
  children: React.ReactNode
  title: string
}
```

---

## 2. Tailwind CSS 주요 클래스

### 텍스트 크기 (`text-`)
| 클래스 | 크기 |
|--------|------|
| `text-sm` | 14px |
| `text-base` | 16px |
| `text-lg` | 18px |
| `text-xl` | 20px |
| `text-2xl` | 24px |
| `text-3xl` | 30px |
| `text-4xl` | 36px |

### 텍스트 굵기 (`font-`)
| 클래스 | 굵기 |
|--------|------|
| `font-normal` | 400 |
| `font-medium` | 500 |
| `font-semibold` | 600 |
| `font-bold` | 700 |

### 크기 지정 (`w-`, `h-`)
Tailwind 클래스 기반으로 CSS로 변환됨. inline style과 결과는 같지만 다른 방식

```tsx
// inline style
<div style={{ width: '480px', height: '796px' }}>

// Tailwind (권장)
<div className="w-[480px] h-[796px]">
```

`[]` 안에 임의의 값을 넣는 것을 **Arbitrary Values** 라고 함
Tailwind 기본 단계에 없는 값을 쓸 때 사용 (Figma 수치와 맞출 때 유용)

### 패딩 / 마진 (`p-`, `m-`)
숫자 단위: `1 = 4px`, `2 = 8px`, `3 = 12px`, `4 = 16px` (4의 배수 기준)

| 클래스 | 의미 |
|--------|------|
| `p-4` | 상하좌우 패딩 16px |
| `px-4` | 좌우(x축) 패딩 16px |
| `py-3` | 상하(y축) 패딩 12px |
| `pt-4` | 위쪽 패딩만 |
| `pb-4` | 아래쪽 패딩만 |
| `mx-4` | 좌우 마진 |
| `my-4` | 상하 마진 |
| `mt-4` | 위쪽 마진만 |

### 투명도 (`/`)
`text-white/60` → 흰색에 60% 불투명도
`bg-white/10` → 흰색 배경에 10% 불투명도
색상 뒤에 `/숫자`로 불투명도 지정 가능
