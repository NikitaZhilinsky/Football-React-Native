import { put, takeEvery } from "redux-saga/effects";
import {  
  requestStandingsData,
  filterStandingsData,
  WATCH_STANDINGS_DATA,
  watchStandingsDataType,
  failedStandingsData
} from "../actions/standingsActions";

function* getFilterData(action: watchStandingsDataType) {
  try {
    yield put(requestStandingsData());
    yield put(filterStandingsData(action.data, action.id));
  } catch (e) {
    yield put(failedStandingsData());
    console.log(e);
  }
}

export function* standingsSaga() {
  yield takeEvery(WATCH_STANDINGS_DATA, getFilterData);
}