import {fetchTaskLists} from "../../api";

export default {
    data() {
        return {
            taskLists: [],
        }
    },
    async created() {
        const response = await fetchTaskLists();
        this.taskLists = response.data;
    },
}
