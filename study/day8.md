## day8 #5.0~5.3

### 2023.03.27 Preview

### 1. setInterval(function, ms단위) - 함수를 초단위로 반복

```javascript
function sayHello() {
  console.log("hello");
}
setInterval(sayHello, 5000); // 5초동안 sayHello 함수 반복
```

### 2. setTimeout(function, ms단위) - 몇 초 기다렸다가 한번만 실행

### 3. new Date()

```javascript
const date = new Date();
date.getDate(); // 27 (27일)
date.getDay(); // 1 (월요일)
date.getFullYear(); // 2023
date.getHours(); // 20 (밤 8시)
date.getMinutes(); // 09 (9분)
date.getSeconds(); // 38 (38초)
```

### 4. padStart(길이, 채울 문자) - string의 시작 부분에 길이만큼 padding 추가

### 4-1. padEnd(길이, 채울 문자) - string의 끝 부분에 길이만큼 padding 추가

```javascript
"1".padStart(2, "0"); // 문자 1을 길이가 2인 문자로 만드는데 만약 길이가 2가 아니라면 0으로 채움
```

### 5. 시계 만들기

```html
// html
<h2 id="clock">00:00:00</h2>
```

```javascript
// javascript
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); // 로드 될때 바로 실행
setInterval(getClock, 1000); // 1초
```

### 6. 위를 한번에 해결

```javascript
function sayHello() {
  clock.innerText = new Date().toLocaleTimeString();
}
sayHello();
setInterval(sayHello, 1000);
```

### 2023.03.29 review

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Time Until Christmas Eve<</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>Time Until Christmas Eve</h1>
    <h2 class="js-clock"></h2>
    <script src="src/index.js"></script>
  </body>
</html>
```

```javascript
const clockTitle = document.querySelector(".js-clock");

function calcChirstmasDay() {
  const today = new Date();
  const christmasDay = new Date("2023-08-25");
  const dDate = christmasDay - today;
  const dDays = Math.floor(dDate / (24 * 60 * 60 * 1000));
  const dHours = String(Math.floor((dDate / (60 * 60 * 1000)) % 24)).padStart(
    2,
    "0"
  );
  const dMinutes = String(Math.floor((dDate / (60 * 1000)) % 60)).padStart(
    2,
    "0"
  );
  const dSeconds = String(Math.floor((dDate / 1000) % 60)).padStart(2, "0");
  clockTitle.innerText = `${dDays}d ${dHours}h ${dMinutes}m ${dSeconds}s`;
}
calcChirstmasDay();
setInterval(calcChirstmasDay, 1000);
```
