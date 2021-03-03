import { combineReducers } from 'redux';
import { selectReducer } from './selectReducer'

const state = {
  selectReducer
};

const rootReducer = combineReducers({
  ...state,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer