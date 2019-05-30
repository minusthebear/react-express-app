import { combineReducers } from "redux";
import tasks from "./tasksReducer";
import comments from './commentsReducer'
import groups from './groupsReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
    tasks,
    comments,
    groups,
    users
});

export default rootReducer;