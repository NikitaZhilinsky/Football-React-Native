export const fetchData = async () => {
  try {
    const response = await fetch('http://api.football-data.org/v2/competitions?plan=TIER_ONE');
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};