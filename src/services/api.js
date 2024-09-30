import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjc0M2M2NjU2OGM2ODhlMGIzM2U1ODgwN2Y4ZGNhMyIsIm5iZiI6MTcyNzQ3MTI2Ny4yNDE0NDUsInN1YiI6IjY2ZjcxYzM3OWQ0NTlkZWIwZmMwN2FkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PzjfgzvyXNAVRS6Ak5_npaFADT4txw3TKYEHf1lTaFU";

export const fetchFilm = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  return axios
    .get(url, options)
    .then((response) => {
      return response.data.results;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const fetchFilmSearch = async (query, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  return axios
    .get(url, options)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const fetchFilmById = async (movie_id, word = "") => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}${word}?language=en-US`;
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  return axios
    .get(url, options)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
