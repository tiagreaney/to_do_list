export default {
    name: "TaskForm",
    data() {
        return {
            task: '',
            listName: {'name': 'To Do List', 'edit': false},
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
