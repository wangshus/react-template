import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import { History, createHashHistory } from "history";
import { reducerIndex } from "src/reducer/indexReducer";
import rootSaga from "src/sagas/indexSaga";


export const history: History = createHashHistory({
    hashType: "noslash"
})

const middleWares = [];
const sagaMiddleware = createSagaMiddleware();
middleWares.push(routerMiddleware(history));
middleWares.push(sagaMiddleware);
middleWares.push(logger);

export const store = createStore(combineReducers(reducerIndex(history)), composeWithDevTools(applyMiddleware(...middleWares)));
sagaMiddleware.run(rootSaga);

