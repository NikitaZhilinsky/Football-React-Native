import { RECEIVE_API_DATA } from "../actions";

const initialState = {
  data: []
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_API_DATA:
      return {
        ...state,
        data,
      }
    default:
      return state;
  }
};

export default searchReducer