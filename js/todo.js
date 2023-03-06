const toDoForm =  document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){

}

function handleToDoSubmit(event){
    event.preventDefault();
    // 값 저장 후 toDoInput 비우기
    const newTodo = toDoInput.value;
    toDoInput.value=""
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);