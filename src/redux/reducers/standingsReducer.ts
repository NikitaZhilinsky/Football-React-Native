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
  draw: null | number,
  form: string,
  goalDifference: null | number,
  goalsAgainst: null | number,
  goalsFor: null | number,
  lost: null | number,
  playedGames: null | number,
  points: null | number,
  position: null | number,
  team: {
    crestUrl: string,
    id: null | number,
    name: string,
  },
  won: null | number,
}

export type Standing = {
  group: null | string,
  stage: string,
  table: Statistics[],
  type: string,
}

export type StandingsResponse = {
  competition: {
    area: {
      id: number, 
      name: string,
    },
    code: string,
    id: number, 
    lastUpdated: string,
    name: string,
    plan: string,
  },
  filters: {},
  season: {
    currentMatchday: number, 
    endDate: string,
    id: number, 
    startDate: string,
    winner: null | string,
  },
  standings: Standing[],
}

type initialStateType = {
  data: Standing[],
  loading: boolean,
  teamStat: Statistics,
}

const initialState: initialStateType = {
  data: [],
  loading: false,
  teamStat: {
    draw: null,
    form: "",
    goalDifference: null,
    goalsAgainst: null,
    goalsFor: null,
    lost: null,
    playedGames: null,
    points: null,
    position: null,
    team: {
      crestUrl: "",
      id: null,
      name: "",
    },
    won: null,
  },
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