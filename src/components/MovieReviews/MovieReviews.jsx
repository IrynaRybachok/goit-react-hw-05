import { useEffect, useState } from "react";
import { fetchFilmReviews } from "../../services/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
import MovieReviewsItem from "../MovieReviewsItem/MovieReviewsItem";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [reviews, setReviews] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      if (!movieId) return;
      try {
        setIsLoading(true);
        setReviews([]);
        const data = await fetchFilmReviews(movieId, page);
        setReviews(data.results);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId, page]);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} className={s.item}>
              <MovieReviewsItem data={review} />
            </li>
          ))}
        </ul>
      )}
      {page < totalPages && (
        <button className={s.btn} onClick={handleNextPage}>
          More
        </button>
      )}
    </>
  );
};
export default MovieReviews;
