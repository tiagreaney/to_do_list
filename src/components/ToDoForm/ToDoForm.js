import {getTaskLists} from "@/api";

export default {
    components: {
        getTaskLists,
    },
    name: "ToDoForm",
    data() {
        return {
            name: '',
            taskLists: getTaskLists()
        }
    },
    methods: {
        addTask() {
            if (this.name !== '') {
                this.$emit("addTask", {
                    name: this.name,
                    id: Date.now()
                })
                this.name = '';
            }
        },
        remove() {
            this.$emit("remove")
        }
    },
}
