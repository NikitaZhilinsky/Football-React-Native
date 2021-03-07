import { Standing, Statistics } from "../reducers/standingsReducer";

export const REQUEST_STANDINGS_DATA = "REQUEST_STANDINGS_DATA";
export const RECEIVE_STANDINGS_DATA = "RECEIVE_STANDINGS_DATA";
export const FAILED_STANDINGS_DATA = "FAILED_STANDINGS_DATA";
export const FILTER_STANDINGS_DATA = "FILTER_STANDINGS_DATA";
export const WATCH_STANDINGS_DATA = "WATCH_STANDINGS_DATA";

export const requestStandingsData = () => ({ type: REQUEST_STANDINGS_DATA });
export const receiveStandingsData = (data: Standing[]) => ({ type: RECEIVE_STANDINGS_DATA, standings: data });
export const failedStandingsData = () => ({ type: FAILED_STANDINGS_DATA });

export const filterStandingsData = (data: Standing[], id: number) => {

  const filteredData = data.map((standing) => (standing.table.find((teamStatistic: Statistics) => teamStatistic.team.id === id)));
  const [requiredTeam] = filteredData.filter(team => team);
  
  return ({
    type: FILTER_STANDINGS_DATA,
    teamStat: requiredTeam, 
  });
};

export const watchStandingsData = (data: Standing[], id: number) => ({ type: WATCH_STANDINGS_DATA, data: data, id: id });

export type requestStandingsDataType = {
  type: typeof REQUEST_STANDINGS_DATA,
}

export type receiveStandingsDataType = {
  type: typeof RECEIVE_STANDINGS_DATA,
  standings: Standing[],
}

export type failedStandingsDataType = {
  type: typeof FAILED_STANDINGS_DATA,
}

export type filterStandingsDataType = {
  type: typeof FILTER_STANDINGS_DATA,
  teamStat: Statistics,
}

export type watchStandingsDataType = {
  type: typeof WATCH_STANDINGS_DATA,
  data: Standing[],
  id: number,
}