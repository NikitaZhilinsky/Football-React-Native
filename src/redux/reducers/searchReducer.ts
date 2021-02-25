import { RECEIVE_API_DATA, receiveApiDataType } from "../actions/searchActions";

// type initialStateType = {
//   data:
// }

const initialState = {
  data: []
}

const searchReducer = (state = initialState, action: receiveApiDataType) => {
  switch (action.type) {
    case RECEIVE_API_DATA:
      return {
        ...state,
        data: action.data,
      }
    default:
      return state;
  }
};

export default searchReducer