import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import { leaguesSaga } from "./sagas/leaguesSaga";
import { teamsSaga } from "./sagas/teamsSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
//   compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(leaguesSaga);
sagaMiddleware.run(teamsSaga);

export default store;