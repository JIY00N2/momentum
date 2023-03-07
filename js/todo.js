const toDoForm =  document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos =[]; // toDo 저장, 빈 배열로 시작, 매번 값 추가할때 기존 값 저장해야함

const TODOS_KEY="todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); 
    // toDos 배열을 localstorage에 집어넣기 local storage는 배열로 저장이 안됨
    // JSON.stringify() - object나 array나 어떤것이든 string으로 바꿈, 다만, array처럼 보임
    // JSON.parse() - 배열처럼 보이는 string을 배열로 바꿔줌
    // "1,2,3" -> JSON.stringify(): "[1,2,3]" -> JSON.parse(): ["1","2","3"]
}

function deleteToDo(event){
    const li = event.target.parentElement; // 삭제하고 싶은 li 찾기
    li.remove(); // 삭제
    // toDo는 toDos DB에 있는 요소 중 하나, toDo 함수는 DB에 있는 모든것과 함께 실행
    // 클릭한 li.id와 다른 toDo는 남기기
    // toDo.id는 number타입, li.id는 string타입->parseInt(문자열->숫자)
    toDos = toDos.filter(toDo => toDo.id!==parseInt(li.id)); 
    saveToDos(); // 지운 다음에 저장한 것 불러오기
}

function paintToDo(newTodo){
    // li , span, button 생성
    const li = document.createElement("li");
    li.id = newTodo.id; // li에 id 추가
    const span = document.createElement("span")
    span.innerText = newTodo.text; // 텍스트를 span 내부에 넣기;
    const button = document.createElement("button"); 
    button.innerText = "❌"; // button 이모티콘 추가
    // X 버튼을 클릭했을때 이벤트 발생
    button.addEventListener("click", deleteToDo);
    // li 내부에 span과 button 추가
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li); // toDoList에 li 넣기
}

function handleToDoSubmit(event){
    event.preventDefault();
    // 값 저장 후 toDoInput 비우기
    const newTodo = toDoInput.value;
    toDoInput.value="" 
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), // Date.now():거의 랜덤 함수처럼 작용
    };
    toDos.push(newTodoObj);  // toDos 배열에 newTodoObj저장
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// local storage에 toDo가 있으면
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); // parsedToDos에 저장된 배열 가져옴 
    toDos = parsedToDos; // toDos에 복원
    // forEach는 배열의 각 item에 대해 function 실행
    // forEach 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행
    parsedToDos.forEach(paintToDo);   
}