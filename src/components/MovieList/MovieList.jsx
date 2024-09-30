import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";
import s from "./MovieList.module.css";
const MovieList = ({ films }) => {
  return (
    <ul className={s.list}>
      {films.map((film) => (
        <li key={film.id} className={s.item}>
          <Link to={`/movies/${film.id}`} className={s.itemLink}>
            <MovieCard data={film} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
