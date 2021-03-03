import { call, put, takeEvery } from "redux-saga/effects";
import { fetchData } from "../api/selectAPI";
import { 
  requestApiData, 
  receiveApiData, 
  WATCH_API_DATA, 
  failedApiData 
} from "../actions/selectActions";

function* getApiData() {
  try {
    yield put(requestApiData());
    // const data = yield call(fetchData);
    const data = yield call(() => {
      return fetch('http://api.football-data.org/v2/competitions?plan=TIER_ONE', {
        headers: {
          "X-Auth-Token": "9053d3414524438e9f1753cf3f3732cb",
        },
      }).then(res => res.json())
    });
    // yield put(receiveApiData(data));
    yield put(receiveApiData(data.competitions));
  } catch (e) {
    yield put(failedApiData());
    console.log(e + "saga");
  }
}

export function* selectSaga() {
  yield takeEvery(WATCH_API_DATA, getApiData);
}
