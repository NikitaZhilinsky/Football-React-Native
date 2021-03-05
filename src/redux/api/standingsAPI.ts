export const fetchStandingsData = async (id: number) => {
  return fetch(`http://api.football-data.org/v2/competitions/${id}/standings?standingType=TOTAL`, {
    headers: {
      "X-Auth-Token": "9053d3414524438e9f1753cf3f3732cb",
    },
  }).then(response => response.json())
}