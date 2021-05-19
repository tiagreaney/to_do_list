import {fetchTaskList, createTask, deleteTask, editTask} from '../../api';
import ToDoList from '../../components/ToDoList/ToDoList.vue'
import ToDoForm from "../../components/ToDoForm/ToDoForm.vue";
import ToDoListItem from "@/components/ToDoListItem/ToDoListItem";

export default {
    components: {
        ToDoForm,
        ToDoList,
        ToDoListItem,
    },
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    data() {
       return {
           taskList: null,
           showError: false,
       }
    },
    async created() {
        await this.fetchData();
    },
    methods: {
        async addTask(task) {
            await createTask(this.id, task);
            await this.fetchData();
        },
        async fetchData() {
            this.showError = null;
            try {
                const response = await fetchTaskList(this.id);
                this.taskList = response.data;
            } catch (e) {
                this.showError = true;
                throw e;
            }
        },
        async remove(task) {
            await deleteTask(this.id, task.id);
            await this.fetchData();
        },

        async update(task) {
            await editTask(this.id, task);
            await this.fetchData();
        }
    }
}
