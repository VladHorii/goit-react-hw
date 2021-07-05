import { useState, useEffect } from 'react';
import MovieService from '../services/moviesApi';

const movieService = new MovieService();

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length !== 0) {
      return;
    }

    movieService.fetchMovies().then(({ results }) => {
      setMovies(results);
    });
  }, [movies.length]);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.length > 0 &&
          movies.map(movie => (
            <li key={movie.id}>{movie.original_title ?? 'no title :('}</li>
          ))}
      </ul>
    </>
  );
}
