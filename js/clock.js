const clock = document.querySelector("h2#clock");

// 시계 만들기
function getClock(){
    const date = new Date();
    // .padStart(2,"0") = "01,02.."
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

// 시계 바로 호출
getClock();
// 함수를 1초마다 실행
setInterval(getClock,1000);