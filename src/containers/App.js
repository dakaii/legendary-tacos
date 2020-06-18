import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import MovieReducer from '../reducers/MovieReducer';
import Sagas from '../sagas/Sagas';
import { Dashboard } from './Dashboard';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { SignInSide } from './SignInSide';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    MovieReducer,
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(Sagas);

export const App = () => {
    return (
        <Fragment>
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route
                            exact
                            path="/signinslide"
                            component={SignInSide}
                        />
                    </Switch>
                </HashRouter>
            </Provider>
        </Fragment>
    );
};
