import { Team } from "../reducers/teamsReducer"

export const REQUEST_TEAMS_DATA = "REQUEST_TEAMS_DATA";
export const RECEIVE_TEAMS_DATA = "RECEIVE_TEAMS_DATA";
export const FAILED_TEAMS_DATA = "FAILED_TEAMS_DATA";
export const WATCH_TEAMS_DATA = "WATCH_TEAMS_DATA";

export const requestTeamsData = () => ({ type: REQUEST_TEAMS_DATA });
export const receiveTeamsData = (data: Team[]) => ({ type: RECEIVE_TEAMS_DATA, data });
export const failedTeamsData = () => ({ type: FAILED_TEAMS_DATA });
export const watchTeamsData = (id: number) => ({ type: WATCH_TEAMS_DATA, league: id });

export type requestTeamsDataType = {
  type: typeof REQUEST_TEAMS_DATA,
}

export type receiveTeamsDataType = {
  type: typeof RECEIVE_TEAMS_DATA,
  data: []
}

export type failedTeamsDataType = {
  type: typeof FAILED_TEAMS_DATA,
}

export type watchTeamsDataType = {
  type: typeof WATCH_TEAMS_DATA,
  league: number
}