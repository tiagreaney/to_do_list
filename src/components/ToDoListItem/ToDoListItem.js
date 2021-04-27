export default {
    name: 'TaskListItem',
    props: {
        data: {
            type: Object,
            required: true,
            validator(value) {
                return value.task;
            }
        },
    },
    methods: {
        remove() {
            this.$emit("remove")
        },
        addTask(){
            this.$emit("addTask")
        }
    }
}
