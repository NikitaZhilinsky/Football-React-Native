export const fetchData = async () => {
  try {
    const response = await fetch("https://api.nestoria.co.uk/api?encoding=json&action=search_listings&listing_type=buy&place_name=brighton");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};