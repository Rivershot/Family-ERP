# 02. 배열 집계 — reduce

> **목표:** 배열을 **하나의 결과**(합계, 객체, 그룹)로 접는 reduce를 이해하고, 어제 막혔던 **날짜별 그룹핑**을 스스로 짠다.

## 왜 필요한가
어제 일정 카드에서 이걸 짰다 — `{ "20260622": [일정,일정], "20260623": [일정] }`.
이게 **reduce로 그룹핑**하는 전형 패턴. reduce는 모던 JS에서 제일 헷갈리지만, **딱 한 문장**으로 정리된다.

> reduce = 배열을 돌면서 **누적값(acc)** 에 원소를 하나씩 **합쳐** 최종 결과 하나를 만든다.

---

## 1) 모양 익히기 — 합계
```js
const nums = [10, 20, 30];

const sum = nums.reduce((acc, n) => acc + n, 0);
//                       ───┬──  ┬   ───┬──   ┬
//                       누적값 현재원소  계산   초기값
// 진행: acc=0  → 0+10=10 → 10+20=30 → 30+30=60
```
- **콜백**: `(acc, 현재원소) => 다음 acc`. **return한 값이 다음 번 acc가 된다.**
- **초기값(두 번째 인자, 여기선 `0`)**: acc의 시작값. **반드시 챙겨라.** 빼면 첫 원소가 초기값이 돼서 빈 배열일 때 에러난다.

전통 웹 비유: 그리드 행을 for로 돌며 `total += row.amount` 하던 것 = `acc`가 그 `total`. reduce는 그걸 **표현식 하나**로 만든 것.

## 2) 결과가 **객체**일 수도 있다 (핵심 도약)
acc가 숫자가 아니라 **객체**여도 된다. 초기값을 `{}`로 주면 됨.
```js
const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

const count = fruits.reduce((acc, f) => {
  acc[f] = (acc[f] ?? 0) + 1; // 없으면 0에서 시작, 있으면 +1
  return acc;                 // ⚠️ acc 반환 잊지 말 것
}, {});
// { apple: 3, banana: 2, cherry: 1 }
```
- `acc[f]` — 객체에 **동적 키**로 접근/추가. (`f`가 "apple"이면 `acc.apple`)
- `?? 0` — 처음엔 `undefined`니까 0으로 시작. (04장 단축평가)
- **중괄호 콜백이면 `return acc`는 필수.** 이거 빠뜨려서 막히는 게 1순위 함정.

## 3) 그룹핑 — 어제 짠 그 패턴
값이 숫자가 아니라 **배열**이면 "그룹핑"이 된다.
```js
const schedule = [
  { id: 1, date: "20260622", title: "병원" },
  { id: 2, date: "20260622", title: "회의" },
  { id: 3, date: "20260623", title: "소풍" },
];

const group = schedule.reduce((acc, s) => {
  acc[s.date] ??= [];   // 이 날짜 칸이 없으면 빈 배열 만들기
  acc[s.date].push(s);  // 그 칸에 일정 밀어넣기
  return acc;
}, {});
// { "20260622": [병원, 회의], "20260623": [소풍] }
```
- `acc[s.date] ??= []` = "`acc[s.date]`가 null/undefined면 `[]`를 대입." (04장 `??=`)
  - 풀어쓰면 `if (acc[s.date] == null) acc[s.date] = [];`
- 그 다음 그 배열에 `push`. **푸시는 기존 배열을 직접 바꾸는 것**(반환값 아님)이라 `acc`는 그대로 두고 마지막에 반환.

**렌더는 이 객체를 다시 펼친다:**
```js
Object.entries(group) // [["20260622",[...]], ["20260623",[...]]]
  .map(([date, list]) => /* 바깥: 날짜 그룹 */ )
```
`Object.entries`는 객체를 `[키, 값]` 쌍 배열로. 구조분해 `[date, list]`로 받음(05장).

---

## ⚡ 직접 해보기
```js
const expenses = [
  { category: "food",      amount: 12000 },
  { category: "transport", amount: 3000 },
  { category: "food",      amount: 8000 },
  { category: "culture",   amount: 20000 },
  { category: "food",      amount: 5000 },
];
```
1. **총 지출액** 구하기 (reduce, 초기값 0)
2. **카테고리별 합계** 객체 만들기 → `{ food: 25000, transport: 3000, culture: 20000 }`
3. **카테고리별로 항목 그룹핑** → `{ food: [3개], transport: [1개], culture: [1개] }`
4. (어려움) 2번을 `map`이나 `filter`로는 왜 못 만드는지 한 문장으로 설명해보기

---

## ✅ 체크포인트
- reduce 콜백: `(acc, 원소) => 다음 acc`, **return이 다음 acc.**
- **초기값 꼭 주기** (`0`, `{}`, `[]`).
- 중괄호 콜백이면 `return acc` 필수.
- 합계=acc 숫자 / 카운트·합산=acc 객체 / **그룹핑=acc 객체에 배열 push**.

<details>
<summary>정답</summary>

```js
// 1
expenses.reduce((acc, e) => acc + e.amount, 0); // 48000

// 2
expenses.reduce((acc, e) => {
  acc[e.category] = (acc[e.category] ?? 0) + e.amount;
  return acc;
}, {});

// 3
expenses.reduce((acc, e) => {
  acc[e.category] ??= [];
  acc[e.category].push(e);
  return acc;
}, {});

// 4: map/filter는 "원소 1개 → 결과 1개"라 길이가 유지/감소만 됨.
//    여러 원소를 "하나의 누적 객체"로 접는 건 reduce만 가능.
```
</details>
