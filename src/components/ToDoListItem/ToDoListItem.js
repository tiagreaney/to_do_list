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
        update() {
            if (!this.edit) {
                return;
            }
            this.edit = false;
            const { id, name } = this.task;
            this.$emit('update', { id, name })
        }
    }
}
