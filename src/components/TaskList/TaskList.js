import draggable from 'vuedraggable'
import LabelEdit from 'label-edit'

export default {
    name: 'Tasks',
    data() {
        return {
            listName: {'name': 'To Do List', 'edit': false},
            checked: false,
            task: '',
            tasks: [{'task': 'study', 'edit': false},
            ],
        }
    },
    components: {
        LabelEdit,
        draggable,
    },
    methods: {
        addTask() {
            if (this.task !== '') {
                this.tasks.push({task: this.task, 'edit': false})
                this.task = '';
            }
        },
        remove(index) {
            this.tasks.splice(index, 1)
        },
        checkForm() {
            if (this.task !== '') {
                return true;
            }
        },
    },
};
