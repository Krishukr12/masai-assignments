import fs from 'fs';

const TASK_FILE = 'tasks.json';

function loadTasks() {
  if (!fs.existsSync(TASK_FILE)) return [];
  return JSON.parse(fs.readFileSync(TASK_FILE));
}

function saveTasks(tasks) {
  fs.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 2));
}

export function addTask(title, dueDate) {
  if (!title || !dueDate) {
    throw new Error("Task title and due date are required.");
  }

  const tasks = loadTasks();
  const newTask = {
    id: Date.now(),
    title,
    dueDate,
    status: 'pending'
  };

  tasks.push(newTask);
  saveTasks(tasks);
  console.log(`✅ Task "${title}" added with due date ${dueDate}.`);
}

export function listTasks() {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log("📭 No tasks found.");
    return;
  }

  console.log("\n📝 Task List:");
  tasks.forEach((task, index) => {
    console.log(
      `${index + 1}. [${task.status === 'completed' ? '✔️' : '⏳'}] ${task.title} (Due: ${task.dueDate}) [ID: ${task.id}]`
    );
  });
}

export function completeTask(identifier) {
  const tasks = loadTasks();
  const task = tasks.find(
    t => t.id.toString() === identifier || t.title.toLowerCase() === identifier.toLowerCase()
  );

  if (!task) {
    console.log("❌ Task not found.");
    return;
  }

  task.status = 'completed';
  saveTasks(tasks);
  console.log(`🎉 Task "${task.title}" marked as completed.`);
}
