## day7 #4.0~4.7

### 2023.03.25 Preview

### 1. html에서 input과 button, click button event, input values

```javascript
// html
<form id ="login-form">
    <input required maxlength = "15" type = "text" placeholder ="What is your name?">
    <button>Log in</button>
</form>
// javascript
const loginForm = document.querySelector("#login-form");// document.getElmentById("login-form")
const loginInput = loginForm.querySelector("input"); // document.querySelector("#login-form input")
const loginButton= loginForm.querySelector("button");


function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막음

}
loginButton.addEventListener("submit",onLoginSubmit);
```

### 2. 새로고침이 일어나는건 form submit의 기본 동작

### 3. preventDefault() - 브라우저가 어떤 event의 기본 행동이든지 발생되지 않도록 막음

### 4. js는 함수를 실행시키는 동시에 함수의 첫번째 인자로 object를 넣어줌

#### (object에는 방금 일어난 event에 대한 여러 정보가 담김, 관례적으로 event라고 적음)

### 4. 링크의 기본동작 막기

```javascript
// html
<a href="https://~">Hi~</a>;

// Javascript
const link = document.querySelector("a");
function handleLinkClick(event) {
  event.preventDefault(); // 해당 링크로 이동하는 것을 막음
  const username = loginInput.value; // value값 받기
}
link.addEventListener("click", handleLinkClick);
```

### 5. 유저가 이름을 제출하면 form 없애고 h1은 표시하기

1. html 요소 자체를 없애기
2. css를 이용해서 숨기기 ✔

### 6. localStorage.setItem("key",value) - 정보를 저장 // key: 저장될 아이템의 이름, value: 변수

### 6-1. localStorage.revomeItem("key",value) - 정보를 삭제

```javascript
// css
.hidden{
    display:none;
}
// html
<form id ="login-form" class="hidden">
    <input required maxlength = "15" type = "text" placeholder ="What is your name?">
    <button>Log in</button>
</form>
<h1 id="greeting" class="hidden"></h1>
// javascript
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

cosnt HIDDEN_CLASSNAME="hidden"; // hidden이라는 string이 반복되므로 오타 방지를 위해 변수로 선언(string으로만 포함된 변수는 대문자로 표기)
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 기본동작 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); // hidden이라는 className을 더해줘서 form 숨기기
    const username = loginInput.value; // 유저의 이름을 변수로 저장
    localStorage.setItem(USERNAME_KEY,username); // 정보 저장
    paintGreetings(username);
    /*greeting.innerText = `hello ${username}`; // h1에 내용 저장
    // greeting.innerText = "hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME); // h1 hidden을 삭제해서 내용 표시*/
}
loginButton.addEventListener("submit",onLoginSubmit);
```

### 7. localStorage.getItem("username") - localStorage에 유저정보 유무 확인

1. 유저정보가 있다 - form을 보여주면 안되고 h1의 요소를 보여줌
2. 유저정보가 없다(null 반환) - form을 보여주고 onLoginSubmit

```javascript
function paintGreetings(username) {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
```

### 8. 반복되는 기능은 함수로 처리해주자

### 2023.03.28 review

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Vanilla Challenge</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>Random Number Game</h1>

    <h2 style="display: inline;">Generate a number between 0 and</h2>
    <input style="display: inline;" id="range-number" type="number" min="0" />

    <div id="user">
      <h3 style="display: inline;">Guess the number:</h3>
      <form style="display: inline;">
        <input type="number" />
        <button>Play!</button>
      </form>
    </div>

    <div id="result">
      <span></span><br />
      <span></span>
    </div>

    <script src="src/index.js"></script>
  </body>
</html>
```

```javascript
// rangeNumber = 20 , userNumber = 17
// play를 누를떄마다 0~20까지의 랜덤 숫자 발생
// You chose: 17, the machine chose: 랜덤.
// userNumber === 랜덤 You won! else You lost!
const rangeNumber = document.querySelector("#range-number");
const userNumber = document.querySelector("#user input");
const playButton = document.querySelector("#user button");
const caseResult = document.querySelector("#result span:first-child");
const result = document.querySelector("#result span:last-child");

function btnPlay(event) {
  event.preventDefault();
  const userRandomNumber = userNumber.value; // 17저장 (문자열임)
  const maxNumber = rangeNumber.value; // 20 까지
  const randomComputerNumber = Math.floor(Math.random() * maxNumber + 1);
  paintResult(userRandomNumber, randomComputerNumber);
}

function paintResult(usernum, randomnum) {
  caseResult.innerText = `You chose: ${usernum}, the machine chose: ${randomnum}`;
  if (parseInt(usernum) === randomnum) {
    result.innerText = "You won!";
  } else if (usernum === "") {
    caseResult.innerText = "Please enter a number!";
    result.innerText = "";
  } else if (parseInt(usernum) > randomnum || parseInt(usernum) < 0) {
    caseResult.innerText = "Please enter a number within the range!";
    result.innerText = "";
  } else {
    result.innerText = "You lost!";
  }
}

playButton.addEventListener("click", btnPlay);
```
