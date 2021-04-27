import {getTasklists} from "../../api";

export default {
    data() {
        return {
            taskLists: getTasklists(),
        }
    },
}
