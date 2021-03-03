import { 
  REQUEST_LEAGUES_DATA,
  requestLeaguesDataType,
  RECEIVE_LEAGUES_DATA, 
  receiveLeaguesDataType,
  FAILED_LEAGUES_DATA,
  failedLeaguesDataType
} from "../actions/leaguesActions";

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
  plan: string,
}

type initialStateType = {
  data: Competition[],
  loading: boolean,
}

const initialState = {
  data: [],
  loading: false,
}

export type ActionsTypes = requestLeaguesDataType | receiveLeaguesDataType | failedLeaguesDataType;

export const leaguesReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case REQUEST_LEAGUES_DATA:
      return {
        ...state,
        loading: true,
      }
    case RECEIVE_LEAGUES_DATA:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    case FAILED_LEAGUES_DATA:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
};