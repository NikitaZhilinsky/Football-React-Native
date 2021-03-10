import { 
  REQUEST_TEAMS_DATA,
  requestTeamsDataType,
  RECEIVE_TEAMS_DATA, 
  receiveTeamsDataType,
  FAILED_TEAMS_DATA,
  failedTeamsDataType
} from "../actions/teamsActions";

export type Team = {
  address: string,
  area: {
    id: number,
    name: string,
  },
  clubColors: string,
  crestUrl: string,
  email: string,
  founded: number,
  id: number,
  lastUpdated: string,
  name: string,
  phone: string,
  shortName: string,
  tla: string,
  venue: string,
  website: string,
}

export type TeamsResponse = {
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
  teams: Team[],
}

type initialStateType = {
  data: Team[],
  loading: boolean,
}

const initialState: initialStateType = {
  data: [],
  loading: false,
}

export type ActionsTypes = requestTeamsDataType | receiveTeamsDataType | failedTeamsDataType;

export const teamsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case REQUEST_TEAMS_DATA:
      return {
        ...state,
        loading: true,
      }
    case RECEIVE_TEAMS_DATA:
      return {
        ...state,
        data: action.teams,
        loading: false,
      }
    case FAILED_TEAMS_DATA:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
};
