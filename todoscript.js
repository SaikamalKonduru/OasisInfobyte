const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const pendingTasksList = document.getElementById("pendingTasksList");
const completedTasksList = document.getElementById("completedTasksList");

addButton.addEventListener("click", addTask);

function createTaskElement(task, isCompleted) {
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = task;
    li.appendChild(taskText);

    const buttons = document.createElement("div");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(li));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(li));

    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);

    li.appendChild(buttons);

    if (isCompleted) {
        completedTasksList.appendChild(li);
    } else {
        pendingTasksList.appendChild(li);
    }
}

function addTask() {
    const task = taskInput.value.trim();
    if (task !== "") {
        createTaskElement(task, false);
        taskInput.value = "";
    }
}

function editTask(taskElement) {
    const newTask = prompt("Edit the task:", taskElement.firstChild.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        taskElement.firstChild.textContent = newTask.trim();
    }
}

function deleteTask(taskElement) {
    taskElement.remove();
}

addTask(); // Add a sample task on page load
