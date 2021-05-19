import LabelEdit from 'label-edit'
import ToDoListItem from '../ToDoListItem/ToDoListItem.vue'

export default {
    name: 'TaskList',
    props: {
        tasks: {
            type: Array,
            required: true,
        }
    },
    components: {
        LabelEdit,
        ToDoListItem,
    },
    methods: {
        remove(task) {
            this.$emit("remove", task)
        },
        update(task) {
            this.$emit("update", task)
        },
    }
};
