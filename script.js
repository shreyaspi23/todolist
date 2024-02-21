window.addEventListener("load", (event) => {
    new cursoreffects.clockCursor();
  });

document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = getTasks();

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="removeTask('${task}')">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

function getTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const newTask = newTaskInput.value.trim();

    if (newTask !== '') {
        const tasks = getTasks();
        tasks.push(newTask);
        saveTasks(tasks);

        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${newTask}</span>
            <button onclick="removeTask('${newTask}')">Remove</button>
        `;
        taskList.appendChild(li);

        newTaskInput.value = '';
    }
}

function removeTask(taskToRemove) {
    const tasks = getTasks().filter(task => task !== taskToRemove);
    saveTasks(tasks);

    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    loadTasks();
}

window.addEventListener("load", (event) => {
    new cursoreffects.ghostCursor();
  });