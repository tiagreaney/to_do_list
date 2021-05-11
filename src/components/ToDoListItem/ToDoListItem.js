export default {
    name: 'ToDoListItem',
    props: {
        task: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            edit: false,
        }
    },
    methods: {
        remove() {
            this.$emit("remove")
        },
        addTask() {
            this.$emit("addTask")
        }
    }
}
