const tasklists = [
    {
        id: 1,
        name: "Yesterday",
        tasks: [
            { id: 1, name: "Create app structure", done: true },
            { id: 2, name: "Setup credentials", done: false }
        ],
    },
    {
        id: 2,
        name: "Today",
        tasks: [
            { id: 3, name: "Create Home page", done: true },
            { id: 4, name: "Create Login page", done: false },
            { id: 5, name: "Create Register page", done: false },
            { id: 6, name: "Create 404 page", done: false }
        ],
    },
    {
        id: 3,
        name: "Tomorrow",
        tasks: [
            { id: 7, name: "Create dashboard page", done: false },
        ],
    }
];

export function getTasklists() {
    return tasklists;
}

export function getTaskListById(id) {
    return tasklists.find((tasklist) => tasklist.id == id);
}
