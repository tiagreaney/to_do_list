import {fetchTaskLists, createTaskList, deleteTaskList} from "../../api";

export default {
    data() {
        return {
            name: '',
            taskLists: [],
        }
    },
    async created() {
        await this.fetchData()
    },
    methods: {
        async fetchData() {
            const response = await fetchTaskLists();
            this.taskLists = response.data;
        },
        async addTaskList() {
            const taskList = { name: this.name, tasks: [], id: Date.now() };
            await createTaskList(taskList);
            await this.fetchData();
            this.name = '';
        },
        async removeTaskList(taskListId) {
            await deleteTaskList(taskListId);
            await this.fetchData();
        }
    }
}
