import draggable from 'vuedraggable'
import LabelEdit from 'label-edit'
import TaskListItem from '../TaskListItem/TaskListItem.vue'

export default {
    name: 'TaskList',
    data() {
        return {
            listName: {listId: 1,'name': 'To Do List', entityType:'taskList', 'edit': false, tasks:[1,2]},
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
