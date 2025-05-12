import { Await } from "react-router-dom";

const API_KEY = "9c80b1b42bf4223fdb2e5d62ec6fe740";
const BASE_URL = "http://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
  );
    const data = await response.json()
    return data.results
};