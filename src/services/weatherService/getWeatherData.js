import { API_KEY, BASE_URL } from "../../core/constants";

export const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);

  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then(response => response.json());
};