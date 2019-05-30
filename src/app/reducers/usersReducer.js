import {defaultState} from "../../server/defaultState";

export default function usersReducer(users = defaultState.users, action) {
    return users;
}