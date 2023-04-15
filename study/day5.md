## day5 #3.6~3.8

### 2023.03.23 Preview

### 1. 함수 + 조건문

```javascript
const h1 = document.querySelector("h1");
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}
```

### 2. style 작업은 css, animation 작업은 js

### 3. raw string이 반복되면 const로 만들어준다.(변수명으로 저장시에 오류를 추적할 수 있음)

### 4. class는 css파일에 .으로 표헌, id는 #으로 표현

### 5. className -> classList -> toggle

1. className - 이전의 class들은 상관하지 않고 모든걸 교체
2. classList - 이전의 class들을 교체하지 않음
   (contains, add, remove...등의 함수)
3. toggle - className이 존재하는지 확인하고 만약 존재한다면 className을 제거, 존재하지 않으면 추가

### 2023.03.24 Review

```javascript
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
h1.style.color = "#ffffff";
body.style.backgroundColor = "#0099ff";

function handleWindowSize() {
  const currentSize = window.innerWidth;
  const currentColor = body.style.backgroundColor;
  let newColor;
  if (currentSize < 1200 && currentSize >= 800) {
    newColor = "#1abc9c";
  } else if (currentSize < 800 && currentSize >= 400) {
    newColor = "#fff200";
  } else {
    newColor = "#9b59b6";
  }
  body.style.backgroundColor = newColor;
}
window.addEventListener("resize", handleWindowSize);
```
과제 링크: https://codesandbox.io/s/empty-blueprint-forked-dr5fsv
