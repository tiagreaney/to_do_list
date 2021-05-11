import {getTaskLists} from "@/api";

export default {
    data() {
        return {
            taskLists: getTaskLists(),
        }
    },
}
