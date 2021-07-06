import { useState, useEffect } from 'react';
import MovieService from '../services/moviesApi';
import MoviesList from '../components/MoviesList';

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
      <h2 className="home-page-title">Trending today</h2>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
}
