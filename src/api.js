const taskLists = [
    {
        id: 1,
        name: "Yesterday",
        tasks: [
            { id: 1, name: "Create app structure", edit: false },
            { id: 2, name: "Setup credentials", edit: false }
        ],
    },
    {
        id: 2,
        name: "Today",
        tasks: [
            { id: 3, name: "Create Home page", edit: false },
            { id: 4, name: "Create Login page", edit: false },
            { id: 5, name: "Create Register page", edit: false },
            { id: 6, name: "Create 404 page", edit: false }
        ],
    },
    {
        id: 3,
        name: "Tomorrow",
        tasks: [
            { id: 7, name: "Create dashboard page", edit: false },
        ],
    }
];

export function getTaskLists() {
    return taskLists;
}

export function getTaskListById(id) {
    return taskLists.find((taskList) => taskList.id == id);
}

export function addTask(taskListId, task) {
    const taskList = getTaskListById(taskListId);
    if (taskList) {
        taskList.tasks.push(task)
    }
}

export function remove(taskListId, task) {
    const taskList = getTaskListById(taskListId);
    if (taskList) {
        const index = taskList.tasks.findIndex((t) => t.id == task.id);
        taskList.tasks.splice(index, 1)
    }
}
