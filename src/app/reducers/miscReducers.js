import {defaultState} from "../../server/defaultState";

export function commentsReducer(comments = defaultState.comments) {
    return comments;
}
export function groupsReducer(groups = defaultState.groups) {
    return groups;
}
export function usersReducer(users = defaultState.users) {
    return users;
}