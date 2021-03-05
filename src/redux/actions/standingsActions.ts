import { Standing } from "../reducers/standingsReducer"

export const REQUEST_STANDINGS_DATA = "REQUEST_STANDINGS_DATA";
export const RECEIVE_STANDINGS_DATA = "RECEIVE_STANDINGS_DATA";
export const FAILED_STANDINGS_DATA = "FAILED_STANDINGS_DATA";
export const WATCH_STANDINGS_DATA = "WATCH_STANDINGS_DATA";

export const requestStandingsData = () => ({ type: REQUEST_STANDINGS_DATA });
export const receiveStandingsData = (data: Standing) => ({ type: RECEIVE_STANDINGS_DATA, standings: data });
export const failedStandingsData = () => ({ type: FAILED_STANDINGS_DATA });

export type requestStandingsDataType = {
  type: typeof REQUEST_STANDINGS_DATA,
}

export type receiveStandingsDataType = {
  type: typeof RECEIVE_STANDINGS_DATA,
  standings: Standing,
}

export type failedStandingsDataType = {
  type: typeof FAILED_STANDINGS_DATA,
}