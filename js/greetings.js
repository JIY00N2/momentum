// id가 login-form에서 input찾기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");


// string을 저장하고 싶을때 대문자
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

// 3. 로그인 버튼
function onLoginSubmit(event){
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막음
    loginForm.classList.add(HIDDEN_CLASSNAME); // form에 hidden 클래스 추가
    const usernameThatUserWroted = loginInput.value; // loginInput의 값을 변수에 저장
    // Application에서 localstorage확인
    localStorage.setItem(USERNAME_KEY, usernameThatUserWroted); // 저장될 아이템의 이름, 값은 username 변수
    paintGreetings(usernameThatUserWroted);
    // form만 hidden 클래스 가짐
}

// 4. Greetings 함수
function paintGreetings(username){
    greeting.innerText = `Welcome ${username} !`; 
    todoForm.classList.remove(HIDDEN_CLASSNAME);// 비어있는 h1에 Hello username 삽입
    greeting.classList.remove(HIDDEN_CLASSNAME); // h1에서 hidden 클래스 삭제
}

// 1. local storage에 유저 정보 유무 확인
// Application의 key 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 2. local storage에 비어있다면
if(savedUsername === null){
    // hidden 제거하고 로그인 폼 보여주기 
    todoForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    // local storage에 값이 있다면
    paintGreetings(savedUsername);
}

