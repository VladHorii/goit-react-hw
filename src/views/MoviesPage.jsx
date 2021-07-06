import { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

import MovieService from '../services/moviesApi';
import MoviesList from '../components/MoviesList';

const movieService = new MovieService();

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();

  const initQuery = new URLSearchParams(location.search).get('query') ?? '';
  const [query, setQuery] = useState(initQuery);
  const [moviesList, setMoviesList] = useState([]);
  const isFirstLoading = useRef(true);

  const fetchMovies = () => {
    movieService.fetchMoviesWithQuery(query).then(({ results }) => {
      setMoviesList(results);
    });
  };

  const onChangeQuery = ({ target }) => {
    setQuery(target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    fetchMovies();
    history.push({ ...location, search: `query=${query}` });
  };

  useEffect(() => {
    if (initQuery !== '' && isFirstLoading.current) {
      isFirstLoading.current = false;
      fetchMovies();
    }
  });

  return (
    <>
      <form onSubmit={onFormSubmit} className="search-form">
        <TextField
          id="standard-basic"
          label="Search movie"
          type="text"
          onChange={onChangeQuery}
          value={query}
        />

        {/* <input type="text" onChange={onChangeQuery} value={query} /> */}

        <Button
          variant="contained"
          color="primary"
          endIcon={<Icon>search</Icon>}
          type="submit"
        >
          Search
        </Button>
      </form>
      {moviesList.length > 0 && <MoviesList movies={moviesList} />}
    </>
  );
}
