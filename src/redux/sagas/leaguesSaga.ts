import { call, put, takeEvery } from "redux-saga/effects";
import { fetchLeaguesData } from "../api/leaguesAPI";
import { 
  requestLeaguesData, 
  receiveLeaguesData, 
  WATCH_LEAGUES_DATA, 
  failedLeaguesData 
} from "../actions/leaguesActions";

function* getApiData() {
  try {
    yield put(requestLeaguesData());
    const data = yield call(fetchLeaguesData);
    yield put(receiveLeaguesData(data.competitions));
  } catch (e) {
    yield put(failedLeaguesData());
    console.log(e);
  }
}

export function* leaguesSaga() {
  yield takeEvery(WATCH_LEAGUES_DATA, getApiData);
}
