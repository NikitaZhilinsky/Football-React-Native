export const fetchLeaguesData = async () => {
  return fetch('http://api.football-data.org/v2/competitions?plan=TIER_ONE', {
    headers: {
      "X-Auth-Token": "9053d3414524438e9f1753cf3f3732cb",
    },
  }).then(response => response.json())
}