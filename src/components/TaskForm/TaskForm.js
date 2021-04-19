export default {
    name: "TaskForm",
    data() {
        return {
            task: '',
            listName: {id: 1, 'name': 'To Do List', 'edit': false, taskList:1, done: false, entityType: "task"},
        }
    },
    methods: {
        addTask(){
            if (this.task !== '') {
                this.$emit("addTask", this.task)
                this.task = '';
            }
        }
    },
}
