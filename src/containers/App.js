import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import MovieReducer from "../reducers/MovieReducer";
import Sagas from "../sagas/Sagas";
import Dashboard from "./Dashboard";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  MovieReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(Sagas);

export const App = () => {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </HashRouter>
        </Provider>
      </Fragment>
    );
  }
}

