import {getTaskListById} from "@/api";


export default {
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    data() {
       return {
           taskList: null,
           showError: false,
       }
    },
    created() {
        const taskList = getTaskListById(this.id);
        if (taskList) {
            this.taskList = taskList;
        } else {
            this.showError = true;
        }
    }
}
