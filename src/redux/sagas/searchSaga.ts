import { call, put, takeEvery } from "redux-saga/effects";
import { fetchData } from "../api/searchAPI";
import { requestApiData, receiveApiData, WATCH_API_DATA } from "../actions/searchActions";

function* getApiData() {
  try {
    yield put(requestApiData());
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* mySaga() {
  yield takeEvery(WATCH_API_DATA, getApiData);
}
