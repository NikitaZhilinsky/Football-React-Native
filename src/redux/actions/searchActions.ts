export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const WATCH_API_DATA = "WATCH_API_DATA";

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = (data: any) => ({ type: RECEIVE_API_DATA, data });
export const watchApiData = () => ({ type: WATCH_API_DATA });

export type requestApiDataType = {
  type: typeof REQUEST_API_DATA,
}

export type receiveApiDataType = {
  type: typeof RECEIVE_API_DATA,
  data: []
}

export type watchApiDataType = {
  type: typeof WATCH_API_DATA,
}