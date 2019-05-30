import { createStore, applyMiddleware, combineReducers } from 'redux';
import {defaultState} from "../../server/defaultState";
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import tasksReducer from '../reducers/tasksReducer';
import {commentsReducer, groupsReducer, usersReducer } from '../reducers/miscReducers';

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas';
import * as mutations from './mutations';

export const store = createStore(
    combineReducers({
        tasksReducer,
        commentsReducer,
        groupsReducer,
        usersReducer
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}