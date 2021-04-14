import TaskList from './components/TaskList/TaskList.vue'
import TaskForm from "./components/TaskForm/TaskForm.vue";

export default {
    name: 'App',
    components: {
        TaskList,
        TaskForm,
    },
    data(){
        return {
            tasks: [{'task': 'study', 'edit': false}],
            listName: {'name': 'To Do List', 'edit': false},
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
