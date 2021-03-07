import { call, put, takeEvery } from "redux-saga/effects";
import { fetchTeamsData } from "../api/teamsAPI";
import { 
  requestTeamsData, 
  receiveTeamsData, 
  WATCH_TEAMS_DATA, 
  watchTeamsDataType,
  failedTeamsData 
} from "../actions/teamsActions";
import { 
  requestStandingsData, 
  receiveStandingsData,  
  failedStandingsData 
} from "../actions/standingsActions";

function* getApiData(action: watchTeamsDataType) {
  try {
    // yield put(requestTeamsData());
    // const data = yield call(fetchTeamsData(action.leagueId));
    // yield put(receiveTeamsData(data.teams));
    
    yield put(requestTeamsData());
    const data = yield call(() => {
      return fetch(`http://api.football-data.org/v2/competitions/${action.leagueId}/teams`, {
        headers: {
          "X-Auth-Token": "9053d3414524438e9f1753cf3f3732cb",
        },
      }).then(response => response.json())
    });
    
    const stand = yield call(() => {
      return fetch(`http://api.football-data.org/v2/competitions/${action.leagueId}/standings?standingType=TOTAL`, {
        headers: {
          "X-Auth-Token": "9053d3414524438e9f1753cf3f3732cb",
        },
      }).then(response => response.json())
    });

    yield put(receiveTeamsData(data.teams));
    yield put(receiveStandingsData(stand.standings));
  } catch (e) {
    yield put(failedTeamsData());
    yield put(failedStandingsData());
    console.log(e);
  }
}
  
export function* teamsSaga() {
  yield takeEvery(WATCH_TEAMS_DATA, getApiData);
}

