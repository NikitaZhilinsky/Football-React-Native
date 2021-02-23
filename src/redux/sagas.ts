import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "./api";
import { REQUEST_API_DATA, receiveApiData } from "./actions";

function* getApiData(action: any) {
    try {
      const data = yield call(fetchData);
      yield put(receiveApiData(data));
    } catch (e) {
      console.log(e);
    }
  }

  export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
  }
