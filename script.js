// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function createNewTask() {
//   const taskName = prompt("Enter task name:");
//   if (!taskName) return;

//   const newTask = {
//     id: Date.now(),
//     name: taskName,
//     elapsedTime: 0,
//     isRunning: false,
//     startTime: null,
//   };

//   tasks.push(newTask);
//   saveTasks();
//   renderTasks();
// }

// function renderTasks() {
//   const taskList = document.getElementById("taskList");
//   taskList.innerHTML = "";
//   tasks.forEach((task) => {
//     const taskElement = document.createElement("div");
//     taskElement.classList.add("task");
//     taskElement.innerHTML = `
//             <h3>${task.name}</h3>
//             <p>Time: ${formatTime(task.elapsedTime)}</p>
//             <div class="task-buttons">
//                 <button onclick="startTask(${task.id})">Start</button>
//                 <button onclick="pauseTask(${task.id})">Pause</button>
//                 <button onclick="resetTask(${task.id})">Reset</button>
//                 <button onclick="deleteTask(${task.id})">Delete</button>
//             </div>
//         `;
//     taskList.appendChild(taskElement);
//   });
// }

// function formatTime(milliseconds) {
//   const totalSeconds = Math.floor(milliseconds / 1000);
//   const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
//   const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
//     2,
//     "0"
//   );
//   const seconds = String(totalSeconds % 60).padStart(2, "0");
//   return `${hours}:${minutes}:${seconds}`;
// }

// function startTask(id) {
//   const task = tasks.find((t) => t.id === id);
//   if (task.isRunning) return;

//   task.isRunning = true;
//   task.startTime = Date.now();
//   saveTasks();
//   updateTaskTime(id);
// }

// function pauseTask(id) {
//   const task = tasks.find((t) => t.id === id);
//   if (!task.isRunning) return;

//   task.isRunning = false;
//   task.elapsedTime += Date.now() - task.startTime;
//   task.startTime = null;
//   saveTasks();
//   renderTasks();
// }

// function resetTask(id) {
//   const task = tasks.find((t) => t.id === id);
//   task.elapsedTime = 0;
//   task.isRunning = false;
//   task.startTime = null;
//   saveTasks();
//   renderTasks();
// }

// function deleteTask(id) {
//   tasks = tasks.filter((t) => t.id !== id);
//   saveTasks();
//   renderTasks();
// }

// function updateTaskTime(id) {
//   const task = tasks.find((t) => t.id === id);
//   if (!task || !task.isRunning) return;

//   task.elapsedTime += Date.now() - task.startTime;
//   task.startTime = Date.now();
//   saveTasks();
//   renderTasks();

//   setTimeout(() => updateTaskTime(id), 1000);
// }

// function showTab(tabName) {
//   document
//     .querySelectorAll(".tab")
//     .forEach((tab) => tab.classList.remove("active"));
//   document.getElementById(tabName).classList.add("active");

//   if (tabName === "analyze") renderAnalysis();
// }

// function renderAnalysis() {
//   const analysisDiv = document.getElementById("analysis");
//   analysisDiv.innerHTML = "";

//   tasks.forEach((task, index) => {
//     const bar = document.createElement("div");
//     bar.classList.add("bar");
//     bar.style.backgroundColor = `hsl(${(index * 45) % 360}, 70%, 50%)`;
//     bar.style.width = `${Math.min(task.elapsedTime / 1000, 100)}%`; // Scale for display
//     const label = document.createElement("div");
//     label.textContent = `${task.name}: ${formatTime(task.elapsedTime)}`;
//     bar.appendChild(label);
//     analysisDiv.appendChild(bar);
//   });
// }

// // Initial load
// renderTasks();
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createNewTask() {
  const taskName = prompt("Enter task name:");
  if (!taskName) return;

  const newTask = {
    id: Date.now(),
    name: taskName,
    elapsedTime: 0,
    isRunning: false,
    startTime: null,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
            <h3>${task.name}</h3>
            <p>Time: <span id="time-${task.id}">${formatTime(
      task.elapsedTime
    )}</span></p>
            <div class="task-buttons">
                <button onclick="startTask(${task.id})">Start</button>
                <button onclick="pauseTask(${task.id})">Pause</button>
                <button onclick="resetTask(${task.id})">Reset</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
    taskList.appendChild(taskElement);

    // If task is running, update its time display every second
    if (task.isRunning) {
      startTask(task.id);
    }
  });
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function startTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task.isRunning) return;

  task.isRunning = true;
  task.startTime = task.startTime || Date.now();
  saveTasks();

  // Update time every second for the running task
  updateTaskTime(id);
}

function pauseTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task.isRunning) return;

  task.isRunning = false;
  task.elapsedTime += Date.now() - task.startTime;
  task.startTime = null;
  saveTasks();
  renderTasks();
}

function resetTask(id) {
  const task = tasks.find((t) => t.id === id);
  task.elapsedTime = 0;
  task.isRunning = false;
  task.startTime = null;
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  renderTasks();
}

function updateTaskTime(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task || !task.isRunning) return;

  const elapsedTimeElement = document.getElementById(`time-${task.id}`);
  if (elapsedTimeElement) {
    task.elapsedTime += Date.now() - task.startTime;
    task.startTime = Date.now();
    elapsedTimeElement.textContent = formatTime(task.elapsedTime);
  }

  // Keep updating every second while task is running
  setTimeout(() => updateTaskTime(id), 1000);
}

function showTab(tabName) {
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  document.getElementById(tabName).classList.add("active");

  if (tabName === "analyze") renderAnalysis();
}

function renderAnalysis() {
  const analysisDiv = document.getElementById("analysis");
  analysisDiv.innerHTML = "";

  tasks.forEach((task, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.backgroundColor = `hsl(${(index * 45) % 360}, 70%, 50%)`;
    bar.style.width = `${Math.min(task.elapsedTime / 1000, 100)}%`; // Scale for display
    const label = document.createElement("div");
    label.textContent = `${task.name}: ${formatTime(task.elapsedTime)}`;
    bar.appendChild(label);
    analysisDiv.appendChild(bar);
  });
}

// Initialize: Render tasks on load and start updating timers if needed
renderTasks();
tasks.forEach((task) => {
  if (task.isRunning) {
    updateTaskTime(task.id);
  }
});
