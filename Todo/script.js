const inputElem = document.getElementById("inputElem");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  if (inputElem.value.trim() === "") return;

  const todoContent = {
    id: Date.now(),
    text: inputElem.value,
    completed: false,
  };

  const liElem = document.createElement("li");
  liElem.id = todoContent.id;
  liElem.classList.add("task-item");

  liElem.innerHTML = `
    <div class="todoEditText">
        <input type="checkbox" class="checkbox" />
        <span class="todo-text">${todoContent.text}</span>
    </div>
    <div class="btnContainer">
        <button class="deleteBtn">Delete</button>
        <button class="editBtn">Edit</button>
    </div>
  `;

  const checkbox = liElem.querySelector(".checkbox");
  const todoText = liElem.querySelector(".todo-text");
  const deleteBtn = liElem.querySelector(".deleteBtn");


  checkbox.addEventListener("change", function () {
    todoContent.completed = checkbox.checked;
    todoText.classList.toggle("strikeThrough", todoContent.completed);
  });

  deleteBtn.addEventListener("click", function () {
    liElem.remove();
  });

  taskList.appendChild(liElem);
  inputElem.value = "";
});