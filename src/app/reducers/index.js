import { combineReducers } from "redux";
import tasks from "./tasksReducer";
import comments from './commentsReducer'
import groups from './groupsReducer';
import users from './usersReducer';
import session from './sessionReducer'

const rootReducer = combineReducers({
    session,
    tasks,
    comments,
    groups,
    users
});

export default rootReducer;