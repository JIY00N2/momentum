const clock = document.querySelector(".clock");
const day = document.querySelector(".date");


// 시계 만들기
function getClock(){
    const date = new Date();
    // .padStart(2,"0") = "01,02.."
    // const hours = date.getHours();
    // const seconds = String(date.getSeconds()).padStart(2,"0");
    //clock.innerText =`${hours}:${minutes}:${seconds}`;
    day.innerText = new Intl.DateTimeFormat('ko-KR',{dateStyle:'long'}).format(date);
    clock.innerText = new Intl.DateTimeFormat('ko-KR',{timeStyle:'medium'}).format(date);
    
}

// 시계 바로 호출
getClock();
// 함수를 1초마다 실행
setInterval(getClock,1000);
