import {defaultState} from "../../server/defaultState";
import * as mutations from '../store/mutations';

export default function groupsReducer(groups = [], action) {
    switch (action.type) {
        case mutations.SET_STATE:
            return action.state.groups;
    }
    return groups;
}