import { RootState } from '../reducers/rootReducer';

export const getCompetitions = (state: RootState) => state.leaguesReducer.data;
export const getLeaguesLoading = (state: RootState) => state.leaguesReducer.loading;
export const getTeams = (state: RootState) => state.teamsReducer.data;
export const getStandings = (state: RootState) => state.standingsReducer.data;
export const getTeamStatistics = (state: RootState) => state.standingsReducer.teamStat;
export const getTeamsLoading = (state: RootState) => state.teamsReducer.loading;
export const getStatLoading = (state: RootState) => state.standingsReducer.loading;