// Load todoList from local storage if available
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  todoList.push({ item: todoItem, dueDate: todoDate });
  saveToLocalStorage();
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";
  containerElement.innerHTML = ""; // Use innerHTML instead of innerText

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];

    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" onclick="deleteTodo(${i})">Delete</button>
    `;
  }

  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  saveToLocalStorage();
  displayItems();
}

function saveToLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
