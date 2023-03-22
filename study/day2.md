## day2 #2.1 ~ #2.6

### 2023.03.20 Preview

### 1. + 연산자로 문자끼리 더 할 수 있음

```javascript
"hello" + "love"; // hellolove
```

### 2. 문자는 작은 따옴표(''), 큰 따옴표("") 다 가능

### 3. 변수 const, let

```javascript
const a = 5; // 변하지 않음
let b = 5; // 값이 변할 수 있음
```

### 4. 변수명을 지을 때 스페이스바가 필요할 때는 단어의 첫 문자를 대문자로 작성

```javascript
const veryLongVariableName = 0;
```

### 5. 대부분 const를 사용하고 필요시에 let을 쓰자

### 6. null - 변수에 null(값이 없다) 할당, undefined - 변수는 선언했지만 값을 할당하지 않음

### 7. push - 항목 하나를 배열 끝에 추가

```javascript
arr.push("love");
```

### 8. Object 객체, 객체는 추가와 수정이 가능하다.

```javascript
const player = {
  name: "jiyoon",
  points: 10,
};

console.log(player); // {name: "jiyoon", points: 10}
console.log(player.name); // jiyoon
console.log(player["points"]); // 10
```
