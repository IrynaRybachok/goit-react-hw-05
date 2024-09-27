import { useEffect, useState } from "react";
import fetchFilm from "./services/api";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await fetchFilm();
      setFilms(data.results);
    };
    getData;
  }, []);

  return (
    <>
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <Link to={film.id.toString()}>
              <p>{film.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
