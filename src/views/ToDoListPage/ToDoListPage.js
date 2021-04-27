import ToDoList from '../../components/ToDoList/ToDoList.vue'
import TaskForm from "../../components/TaskForm/TaskForm.vue";
import TaskList from "../TaskList/TaskList"

export default {
    name: 'App',
    components: {
        TaskList,
        TaskForm,
        ToDoList,
    },
    data(){
        return {
            tasks: [{'task': 'study', 'edit': false}],
            tasklists: {'name': 'To Do List', 'edit': false},
        }
    },
    mounted(){
        if(localStorage.tasks){
            this.tasks = JSON.parse(localStorage.tasks);
        }
    },
    watch: {
        tasks(newTask) {
            localStorage.tasks = JSON.stringify(newTask);
        }
    },
    methods: {
        addTask(task) {
            this.tasks.push({task: task, 'edit': false})
        },
        remove(index) {
            this.tasks.splice(index, 1)
        },

    }
}
