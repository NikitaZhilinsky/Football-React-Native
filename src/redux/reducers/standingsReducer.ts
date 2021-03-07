import { 
  REQUEST_STANDINGS_DATA,
  requestStandingsDataType,
  RECEIVE_STANDINGS_DATA, 
  receiveStandingsDataType,
  FAILED_STANDINGS_DATA,
  failedStandingsDataType,
  FILTER_STANDINGS_DATA,
  filterStandingsDataType,
} from "../actions/standingsActions";

export type Statistics = {
  draw: number,
  form: string,
  goalDifference: number,
  goalsAgainst: number,
  goalsFor: number,
  lost: number,
  playedGames: number,
  points: number,
  position: number,
  team: {
    // crestUrl: ,
    id: number,
    name: string,
  },
  won: number,
}

export type Standing = {
  // group: ,
  stage: string,
  table: Statistics,
  type: string,
}

type initialStateType = {
  data: Standing[],
  loading: boolean,
  teamStat: Statistics,
}

const initialState = {
  data: [],
  loading: false,
  teamStat: {},
}

export type ActionsTypes = requestStandingsDataType | receiveStandingsDataType | failedStandingsDataType | filterStandingsDataType;

export const standingsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case REQUEST_STANDINGS_DATA:
      return {
        ...state,
        loading: true,
      }
    case RECEIVE_STANDINGS_DATA:
      return {
        ...state,
        data: action.standings,
        loading: false,
      }
    case FAILED_STANDINGS_DATA:
      return {
        ...state,
        loading: true,
      }
    case FILTER_STANDINGS_DATA:
      return {
        ...state,
        teamStat: action.teamStat,
        loading: false,
      }
    default:
      return state;
  }
};