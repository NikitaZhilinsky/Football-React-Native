import { call, put, takeEvery } from "redux-saga/effects";
import { fetchTeamsData } from "../api/teamsAPI";
import { fetchStandingsData } from "../api/standingsAPI";
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
import { StandingsResponse } from "../reducers/standingsReducer";
import { TeamsResponse } from "../reducers/teamsReducer";

function* getApiData(action: watchTeamsDataType) {
  try {
    yield put(requestTeamsData());
    
    const data: TeamsResponse = yield call(fetchTeamsData, action.leagueId);
    const stand: StandingsResponse = yield call(fetchStandingsData, action.leagueId);

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

