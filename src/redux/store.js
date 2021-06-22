import { createStore, compose, applyMiddleware } from "redux";

import rootReducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleWare),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)(rootReducer);
sagaMiddleWare.run(rootSaga);
export default store;
