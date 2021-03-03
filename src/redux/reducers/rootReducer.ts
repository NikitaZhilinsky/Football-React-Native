import { combineReducers } from 'redux';
import { leaguesReducer } from './leaguesReducer';
import { teamsReducer } from './teamsReducer';

const state = {
  leaguesReducer,
  teamsReducer
};

const rootReducer = combineReducers({
  ...state,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer