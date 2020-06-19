import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { PrivateRoute } from '../components/PrivateRoute';
import reducer from '../reducers/rootReducer';
import Sagas from '../sagas/Sagas';
import { Dashboard } from './Dashboard';
import { Landing } from './Landing';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(Sagas);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#07C',
        },
        secondary: {
            main: '#E33E7F',
        },
    },
});
export const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={LogIn} />
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                    </Switch>
                </HashRouter>
            </Provider>
        </MuiThemeProvider>
    );
};
