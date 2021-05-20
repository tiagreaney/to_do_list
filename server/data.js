const taskLists = [
  {
    id: 1,
    name: "To Do",
    tasks: [
      { id: 1, name: "Create app structure", edit: false },
      { id: 2, name: "Setup credentials", edit: false }
    ],
  },
  {
    id: 2,
    name: "In Progress",
    tasks: [
      { id: 3, name: "Create Home page", edit: false },
      { id: 4, name: "Create Login page", edit: false },
      { id: 5, name: "Create Register page", edit: false },
      { id: 6, name: "Create 404 page", edit: false }
    ],
  },
  {
    id: 3,
    name: "Done",
    tasks: [
      { id: 7, name: "Create dashboard page", edit: false },
    ],
  }
];

function getTaskLists() {
  return taskLists;
}

function getTaskListById(id) {
  return taskLists.find((taskList) => taskList.id == id);
}

function addTask(taskListId, task) {
  const taskList = getTaskListById(taskListId);
  if (taskList) {
    taskList.tasks.push(task)
  }
}

function removeTask(taskListId, taskId) {
  const taskList = getTaskListById(taskListId);
  if (taskList) {
    const index = taskList.tasks.findIndex((task) => task.id == taskId);
    taskList.tasks.splice(index, 1)
  }
}

function updateTask(taskListId, task) {
  const taskList = getTaskListById(taskListId);
  if (taskList) {
    const index = taskList.tasks.findIndex((t) => t.id == task.id);
    taskList.tasks.splice(index, 1, task);
    return task;
  }
  return null;
}

module.exports = {
  getTaskLists,
  getTaskListById,
  addTask,
  removeTask,
  updateTask,
}
