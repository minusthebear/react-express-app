import {defaultState} from '../../server/defaultState';
import * as mutations from '../store/mutations';

export default function sessionReducer(userSession = defaultState.session || {}, action) {
    let { type, authenticated, session } = action;
    switch (type) {
        case mutations.SET_STATE:
            return {...userSession, id: action.state.session.id};
        case mutations.REQUEST_AUTHENTICATE_USER:
            return {...userSession, authenticated: mutations.AUTHENTICATING};
        case mutations.PROCESSING_AUTHENTICATE_USER:
            return {...userSession, authenticated};
        default:
            return userSession;
    }
}