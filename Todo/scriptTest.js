let todoInput = document.getElementById("todoInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let todoList = document.getElementById("todoList");

addTaskBtn.addEventListener("click", function () {
  if(todoInput.value === "") return;

  const todoContent = {
    id: Date.now(),
    todoText: todoInput.value,
    completed: false
  }

  const todoLi = document.createElement("li");

  todoLi.id = todoContent.id;

  todoLi.innerHTML = 
  `
        <span>${todoContent.todoText}</span>
        <button>Delete</button>
  `
  todoList.appendChild(todoLi);
});
