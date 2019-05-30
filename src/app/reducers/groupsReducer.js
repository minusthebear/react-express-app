import {defaultState} from "../../server/defaultState";

export default function groupsReducer(groups = defaultState.groups, action) {
    return groups;
}