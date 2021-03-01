import { combineReducers } from 'redux';
import { searchReducer } from './searchReducer'

const state = {
  searchReducer
};

const rootReducer = combineReducers({
  ...state,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer