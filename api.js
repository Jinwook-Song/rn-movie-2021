import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_KEY = "e9658b7e9fde9f5a87597714d40bf19c";

const makeRequest = (path, params) =>
  axios.get(`${BASE_URL}${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });

const getRequest = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (error) {
    return [null, error];
  }
};

export const movieApi = {
  nowPlaying: () => getRequest("/movie/now_playing"),
  popular: () => getRequest("/movie/popular"),
  upcoming: () => getRequest("/movie/upcoming", { region: "kr" }),
  search: (query) => getRequest("/search/movie", { query }),
  movie: (id) => getRequest(`/movie/${id}`, { append_to_response: "videos" }),
  discover: () => getRequest("/discover/movie"),
};

export const tvApi = {
  today: () => getRequest("/tv/airing_today"),
  thisWeek: () => getRequest("/tv/on_the_air"),
  topRated: () => getRequest("/tv/top_rated"),
  popular: () => getRequest("/tv/popular"),
  search: (query) => getRequest("/search/tv", { query }),
  show: (id) => getRequest(`/tv/${id}`, { append_to_response: "videos" }),
};

export const apiImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
