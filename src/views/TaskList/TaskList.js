import {getTaskListById} from "@/api";
import {addTask} from "@/api";
import {remove} from "@/api";
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
    created() {
        this.fetchData();
    },
    methods: {
        addTask(task) {
            addTask(this.id, task)
            this.fetchData()
        },
        fetchData() {
            const taskList = getTaskListById(this.id);
            if (taskList) {
                this.taskList = taskList;
            } else {
                this.showError = true;
            }
        },
        remove(task) {
            remove(this.id, task)
            this.fetchData()
        },
    }
}
