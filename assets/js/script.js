var formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");

const createTaskHandler = function(event) {
    event.preventDefault();
    let taskItemEl = document.createElement("li");
    taskItemEl.textContent = "This is a new task";
    taskItemEl.className = "task-item";
    tasksToDoEl.appendChild(taskItemEl);
}
formEl.addEventListener("submit", createTaskHandler);