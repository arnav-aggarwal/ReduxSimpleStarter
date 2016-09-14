import axios from 'axios';

const API_KEY = '4bf66169d52dae258c6598a73ec9bd93';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// We don't want to be copy-pasting strings. We want to 
// reference a variable. Removes chance of bugs due to mis-spells.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const countryCode = 'us';
  const url = `${ROOT_URL}&q=${city},${countryCode}&units=imperial`;
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}