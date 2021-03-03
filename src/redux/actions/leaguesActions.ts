import { Competition } from "../reducers/leaguesReducer";

export const REQUEST_LEAGUES_DATA = "REQUEST_LEAGUES_DATA";
export const RECEIVE_LEAGUES_DATA = "RECEIVE_LEAGUES_DATA";
export const FAILED_LEAGUES_DATA = "FAILED_LEAGUES_DATA";
export const WATCH_LEAGUES_DATA = "WATCH_LEAGUES_DATA";

export const requestLeaguesData = () => ({ type: REQUEST_LEAGUES_DATA });
export const receiveLeaguesData = (data: Competition[]) => ({ type: RECEIVE_LEAGUES_DATA, data });
export const failedLeaguesData = () => ({ type: FAILED_LEAGUES_DATA });
export const watchLeaguesData = () => ({ type: WATCH_LEAGUES_DATA });

export type requestLeaguesDataType = {
  type: typeof REQUEST_LEAGUES_DATA,
}

export type receiveLeaguesDataType = {
  type: typeof RECEIVE_LEAGUES_DATA,
  data: []
}

export type failedLeaguesDataType = {
  type: typeof FAILED_LEAGUES_DATA,
}

export type watchLeaguesDataType = {
  type: typeof WATCH_LEAGUES_DATA,
}