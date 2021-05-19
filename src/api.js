import axios from 'axios';
const rootUrl = 'http://localhost:8000/api'

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

function buildUrl(url) {
    return rootUrl + url;
}

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


export function fetchTaskLists() {
    return axios.get(buildUrl('/tasklists'));
}

export function createTaskList(taskList) {
    return axios.post(buildUrl('/tasklists'), taskList);
}

export function fetchTaskList(taskListId) {
    return axios.get(buildUrl('/tasklists/' + taskListId));
}

export function deleteTaskList(taskListId) {
    return axios.delete(buildUrl('/tasklists/' + taskListId));
}

export function createTask(taskListId, task) {
    return axios.post(buildUrl('/tasklists/' + taskListId + '/tasks'), task);
}

export function editTask(taskListId, task) {
    return axios.put(buildUrl('/tasklists/' + taskListId + '/tasks/' + task.id), task);
}

export function deleteTask(taskListId, taskId) {
    return axios.delete(buildUrl('/tasklists/' + taskListId + '/tasks/' + taskId));
}
