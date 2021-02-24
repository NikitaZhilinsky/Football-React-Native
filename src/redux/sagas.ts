import { call, put, takeEvery } from "redux-saga/effects";
import { fetchData } from "./api";
import { receiveApiData, REQUEST_API_DATA } from "./actions";

function* getApiData() {
    try {
      const data = yield call(fetchData);
      yield put(receiveApiData(data));
    } catch (e) {
      console.log(e);
    }
  }

  export default function* mySaga() {
    yield takeEvery(REQUEST_API_DATA, getApiData);
  }
