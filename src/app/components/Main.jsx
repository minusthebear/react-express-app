import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import {ConnectedDashboard as Dashboard} from "./Dashboard";
import {Router, Route } from 'react-router-dom';
import { history } from "../store/history";
import { ConnectedNavigation as Navigation } from "./Navigation";
import { ConnectedTaskDetail } from "./TaskDetail";

export const Main = () => {
    return (
        <Router history={history} >
            <Provider store={store}>
                <div>
                    <Navigation/>
                    {/*<Dashboard/>*/}
                    <Route
                        exact
                        path="/dashboard"
                        render={() => (<Dashboard />)}
                    />
                    <Route
                        exact
                        path="/task/:id"
                        render={({match}) => (<ConnectedTaskDetail match={match} />)}
                    />
                </div>
            </Provider>
        </Router>
    )
};