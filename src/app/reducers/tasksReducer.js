import {defaultState} from "../../server/defaultState";
import * as mutations from "../store/mutations";

export default function tasksReducer(tasks = [], action) {
    switch (action.type) {
        case mutations.SET_STATE:
            return action.state.tasks;
        case mutations.CREATE_TASK:
            return [...tasks, {
                id: action.taskID,
                name: 'New Task',
                group: action.groupID,
                owner: action.ownerID,
                isComplete: false
            }];
        case mutations.SET_TASK_COMPLETE:
            return tasks.map(task => {
                return (task.id === action.taskID) ?
                    {...task, isComplete: action.isComplete} :
                    task;
            });
        case mutations.SET_TASK_GROUP:
            return tasks.map(task => {
                return (task.id === action.taskID) ?
                    {...task, group: action.groupID} :
                    task;
            });
        case mutations.SET_TASK_NAME:
            return tasks.map(task => {
                return (task.id === action.taskID) ?
                    {...task, name: action.name} :
                    task;
            });
    }
    return tasks;
}