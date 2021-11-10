var formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");

const createTaskEl = function(taskData) {
    let taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskData.name + "</h3><span class='task-type'>" + taskData.type + "</span>";
    taskItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(taskItemEl);
};

const createTaskHandler = function(event) {
    event.preventDefault();

    let taskNameInput = document.querySelector("input[name='task-name']").value;
    let taskTypeInput = document.querySelector("select[name='task-type']").value;
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj);
    formEl.reset();
};

formEl.addEventListener("submit", createTaskHandler);