import { 
  REQUEST_API_DATA,
  requestApiDataType,
  RECEIVE_API_DATA, 
  receiveApiDataType,
  FAILED_API_DATA,
  failedApiDataType
} from "../actions/selectActions";

export type Competition = {
  area: {
    countryCode: string,
    id: number,
    name: string,
  },
  code: string,
  currentSeason: {
    currentMatchday: number,
    endDate: string,
    id: number,
    startDate: string,
  },
  id: number,
  lastUpdated: string,
  name: string,
  numberOfAvailableSeasons: number,
  plan: string
}

type initialStateType = {
  data: Competition[],
  loading: boolean,
}

const initialState = {
  data: [],
  loading: false,
}

export type ActionsTypes = requestApiDataType | receiveApiDataType | failedApiDataType;

export const selectReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        loading: true,
      }
    case RECEIVE_API_DATA:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    case FAILED_API_DATA:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
};