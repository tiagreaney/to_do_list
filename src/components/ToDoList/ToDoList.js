import draggable from 'vuedraggable'
import LabelEdit from 'label-edit'
import TaskListItem from '../ToDoListItem/ToDoListItem.vue'

export default {
    name: 'TaskList',
    data() {
        return {
            tasklists: {listId: 1,'name': 'To Do List', entityType:'taskList', 'edit': false, tasks:[1,2]},
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
        draggable,
        TaskListItem,
    },
    methods: {
        remove(index) {
            this.$emit("remove", index)
        },
        addTask(){
            this.$emit("addTask")
        }
    }
};
