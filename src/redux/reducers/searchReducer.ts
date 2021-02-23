import { RECEIVE_API_DATA } from "../actions";

const searchReducer = (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};

export default searchReducer