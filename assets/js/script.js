let buttonEl = document.querySelector("#save-task");
let tasksToDoEl = document.querySelector("#tasks-to-do");

const createTaskHandler = function() {
    let taskItemEl = document.createElement("li");
    taskItemEl.textContent = "hello";
    taskItemEl.className = "task-item";
    tasksToDoEl.appendChild(taskItemEl);
}
buttonEl.addEventListener("click", createTaskHandler);