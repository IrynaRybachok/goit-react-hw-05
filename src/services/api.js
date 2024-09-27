import axios from "axios";
const URL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjc0M2M2NjU2OGM2ODhlMGIzM2U1ODgwN2Y4ZGNhMyIsIm5iZiI6MTcyNzQ3MTI2Ny4yNDE0NDUsInN1YiI6IjY2ZjcxYzM3OWQ0NTlkZWIwZmMwN2FkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PzjfgzvyXNAVRS6Ak5_npaFADT4txw3TKYEHf1lTaFU";

const fetchFilm = async () => {
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  return axios
    .get(URL, options)
    .then((response) => console.log(response))
    .catch((err) => console.error(err.message));
};

export default fetchFilm;
