import { call, put, takeEvery } from "redux-saga/effects";
import { watchTeamsDataType } from "../actions/teamsActions";
import { fetchTeamsData } from "../api/teamsAPI";
import { 
  requestTeamsData, 
  receiveTeamsData, 
  WATCH_TEAMS_DATA, 
  failedTeamsData 
} from "../actions/teamsActions";

function* getApiData(action: watchTeamsDataType) {
  try {
    yield put(requestTeamsData());
    // const data = yield call(fetchTeamsData(action.league));
    const data = yield call(() => {
      return fetch(`http://api.football-data.org/v2/competitions/${action.league}/teams`, {
        headers: {
          "X-Auth-Token": "9053d3414524438e9f1753cf3f3732cb",
        },
      }).then(response => response.json())
    });
    yield put(receiveTeamsData(data.teams));
    console.log(data.teams); 
  } catch (e) {
    yield put(failedTeamsData());
    console.log(e);
  }
}
  
export function* teamsSaga() {
  yield takeEvery(WATCH_TEAMS_DATA, getApiData);
}