import { combineReducers } from 'redux';
import { leaguesReducer } from './leaguesReducer';
import { teamsReducer } from './teamsReducer';
import { standingsReducer } from './standingsReducer';

const state = {
  leaguesReducer,
  teamsReducer,
  standingsReducer,
};

const rootReducer = combineReducers({
  ...state,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer