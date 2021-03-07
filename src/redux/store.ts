import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import { leaguesSaga } from './sagas/leaguesSaga';
import { teamsSaga } from './sagas/teamsSaga';
import { standingsSaga } from './sagas/standingsSaga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
//   compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(leaguesSaga);
sagaMiddleware.run(teamsSaga);
sagaMiddleware.run(standingsSaga);

export default store;