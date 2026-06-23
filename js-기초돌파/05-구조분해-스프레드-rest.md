# 05. 구조분해 · 스프레드 · rest — `{ }` `[ ]` `...`

> **목표:** 객체/배열을 "풀어 꺼내기(구조분해)"와 "펼쳐 담기(스프레드)"를 구분해 쓴다.

## 왜 필요한가
- `function Card({ title, icon })` ← props **구조분해**. React 어디서나 나옴.
- `[...members].sort(...)` ← 원본 안 건드리려고 **복사**(스프레드).
- `data.map(([date, list]) => ...)` ← `Object.entries` 결과 **배열 구조분해**.
- `{ value, itemStyle: { color } }` ← ECharts 데이터 객체.

---

## 1) 객체 구조분해 — "필요한 키만 꺼내 변수로"
```js
const member = { name: "채원", age: 34, role: "admin" };

const { name, role } = member;   // name="채원", role="admin"
```
- 중괄호 안 이름은 **키 이름과 같아야** 매칭됨(순서 무관, 이름 기준).
- 별명: `const { name: userName } = member;` → `userName`으로 받음.
- 기본값: `const { nickname = "익명" } = member;` → 없으면 "익명".
- 중첩: `const { itemStyle: { color } } = data;` → 안쪽 `color`까지.

**React props가 바로 이것:**
```jsx
function Card({ title, icon, kind = "expense" }) { ... }
// 부모: <Card title="예산" icon={<Md.. />} />
// = props 객체를 함수 입구에서 풀어 꺼냄 + kind 기본값
```

## 2) 배열 구조분해 — "순서대로 꺼내기"
```js
const [first, second] = [10, 20]; // first=10, second=20
const [, , third] = [1, 2, 3];    // 건너뛰기 → third=3
```
- 객체는 **이름**, 배열은 **위치(순서)** 기준.
- 어제 패턴:
```js
Object.entries(group).map(([date, list]) => ...)
//                          └ [키, 값] 쌍을 위치로 분해
```
- `useState`도 배열 구조분해다: `const [count, setCount] = useState(0);`

## 3) 스프레드 `...` — "펼쳐서 새로 담기"
구조분해의 반대 느낌. **기존 걸 펼쳐 새 객체/배열을 만든다.**
```js
// 배열
const a = [1, 2];
const b = [...a, 3];        // [1, 2, 3]  (a는 그대로, 새 배열)
const copy = [...a];        // 얕은 복사 → sort 등 원본보호에 사용

// 객체
const base = { name: "채원", age: 34 };
const updated = { ...base, age: 35 };   // { name:"채원", age:35 } age 덮어쓰기
```
- **불변성(immutability):** 원본을 직접 바꾸지 않고 **새 걸 만든다.** React state 업데이트의 기본 자세.
```js
setMembers([...members, newMember]);          // 추가
setUser({ ...user, name: "변경" });           // 일부 수정
```
- 뒤에 오는 게 **덮어씀** → `{ ...base, age: 35 }` 에서 age는 35.
- ⚠️ **얕은 복사:** 한 겹만 복사. 중첩 객체는 안쪽이 공유됨(나중에 깊은 복사는 따로).

## 4) rest `...` — "나머지를 모아서"
스프레드와 **기호는 같지만 위치가 반대.** 받는 쪽(왼쪽)에 있으면 rest.
```js
// 배열: 앞 하나 + 나머지
const [head, ...tail] = [1, 2, 3, 4]; // head=1, tail=[2,3,4]

// 객체: 일부 빼고 나머지
const { name, ...rest } = member;     // name="채원", rest={ age, role }

// 함수 인자: 개수 모를 때
function sum(...nums) { return nums.reduce((a, n) => a + n, 0); }
sum(1, 2, 3); // 6
```
**구분법:** `...`이 **= 오른쪽(값 만드는 쪽)** = 스프레드(펼치기), **= 왼쪽/함수 매개변수** = rest(모으기).

---

## ⚡ 직접 해보기
```js
const member = { id: 1, name: "민지", age: 31, role: "user" };
const list = ["a", "b", "c", "d"];
```
1. `member`에서 `name`, `age`만 구조분해로 꺼내기
2. `list`에서 첫 번째는 `first`, 나머지는 `others` 배열로
3. `member`의 `age`만 32로 바꾼 **새 객체** 만들기 (원본 유지)
4. `list` 끝에 `"e"`를 더한 **새 배열** 만들기
5. (생각) 3·4번을 원본 직접 수정 대신 스프레드로 하는 이유는?

---

## ✅ 체크포인트
- 구조분해: 객체는 **이름**, 배열은 **순서**로 꺼냄. props가 대표 예.
- 스프레드(= 오른쪽): 펼쳐 **새 객체/배열** → 불변성, 복사, 합치기.
- rest(= 왼쪽): 나머지를 **모음**.
- React state는 항상 **새 값**으로 → 스프레드가 단짝.

<details>
<summary>정답</summary>

```js
// 1
const { name, age } = member;
// 2
const [first, ...others] = list; // others = ["b","c","d"]
// 3
const updated = { ...member, age: 32 };
// 4
const added = [...list, "e"];
// 5: 원본을 바꾸면 React가 "같은 참조"로 보고 리렌더를 안 하거나,
//    다른 곳에서 그 객체를 공유 중이면 예상 못 한 변경이 퍼짐. 새 값을 만들어 setState해야 안전.
```
</details>
