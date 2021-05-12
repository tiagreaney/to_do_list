import LabelEdit from 'label-edit'
import ToDoListItem from '../ToDoListItem/ToDoListItem.vue'

export default {
    name: 'TaskList',
    data() {
        return {
            taskLists: {listId: 1,'name': 'To Do List', entityType: 'taskList', 'edit': false, tasks: [1,2]},
            checked: false,
        }
    },
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
        addTask() {
            this.$emit("addTask")
        }
    }
};
