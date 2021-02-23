import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
//   compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(mySaga);

export default store;