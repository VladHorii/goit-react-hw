import { Route, Switch } from 'react-router-dom';
// import { useState } from 'react';

import Container from './components/Container';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import Navigation from './components/Navigation';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundPage from './views/NotFoundPage';
// import Searchbar from './components/Searchbar';

export default function App() {
  // const [moviesList, setMoviesList] = useState([]);

  return (
    <>
      {/* <Searchbar /> */}

      <Container>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
