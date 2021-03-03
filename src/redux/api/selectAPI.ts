export const fetchData = async () => {
  try {
    const response = await fetch('http://api.football-data.org/v2/competitions?plan=TIER_ONE', {
      headers: {
        "X-Auth-Token": "9053d3414524438e9f1753cf3f3732cb",
      },
    })
    const data = await response.json();
    return data.competitions;
  } catch (e) {
    console.log(e + "api");
  }
};