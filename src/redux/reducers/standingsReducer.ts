import { 
  REQUEST_STANDINGS_DATA,
  requestStandingsDataType,
  RECEIVE_STANDINGS_DATA, 
  receiveStandingsDataType,
  FAILED_STANDINGS_DATA,
  failedStandingsDataType
} from "../actions/standingsActions";

export type Standing = {
  // group: ,
  stage: string,
  table: {
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
  },
  type: string,
}

type initialStateType = {
  data: Standing[],
  loading: boolean,
}

const initialState = {
  data: [],
  loading: false,
}

export type ActionsTypes = requestStandingsDataType | receiveStandingsDataType | failedStandingsDataType;

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
    default:
      return state;
  }
};