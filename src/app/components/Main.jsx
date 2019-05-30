import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import {ConnectedDashboard as Dashboard} from "./Dashboard";
import {Router, Route, Redirect } from 'react-router-dom';
import { history } from "../store/history";
import { ConnectedNavigation as Navigation } from "./Navigation";
import { ConnectedTaskDetail as TaskDetail } from "./TaskDetail";
import { ConnectedLogin as Login } from "./Login";

const RouteGuard = Component => ({match}) => {
    console.log('Route guard:', match);
    if (!store.getState().session.authenticated) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <Component match={match} />
    );
};

export const Main = () => {
    return (
        <Router history={history} >
            <Provider store={store}>
                <div>
                    <Navigation/>
                    <Route exact path="/" component={Login} />
                    <Route
                        exact
                        path="/dashboard"
                        render={RouteGuard(Dashboard)}
                    />
                    <Route
                        exact
                        path="/task/:id"
                        render={RouteGuard(TaskDetail)}
                    />
                </div>
            </Provider>
        </Router>
    )
};