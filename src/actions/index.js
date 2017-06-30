import axios from 'axios';

const API_KEY = 'b0a4dd6428cd05dedd26817d132c8be2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`; // Static country code
  const request = axios.get(url); // Returns promise

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
