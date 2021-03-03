import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import { selectSaga } from "./sagas/selectSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
//   compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(selectSaga);

export default store;