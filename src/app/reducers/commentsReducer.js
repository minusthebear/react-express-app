import {defaultState} from "../../server/defaultState";

export default function commentsReducer(comments = defaultState.comments, action) {
    return comments;
}