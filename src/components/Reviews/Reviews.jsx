import { useState, useEffect } from 'react';
import MovieService from '../../services/moviesApi';
const movieService = new MovieService();

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieService
      .fetchMovieReviews(id)
      .then(({ results }) => setReviews(results));
  }, [id]);
  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, content, author }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </>
  );
}
