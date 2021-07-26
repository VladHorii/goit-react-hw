import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import Navigation from './components/Navigation';
import LoaderSpinner from './components/LoaderSpinner';
const HomePage = lazy(() => import('./views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./views/NotFoundPage'));
export default function App() {
  return (
    <>
      <Container>
        <Navigation />
        <Suspense fallback={<LoaderSpinner />}>
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
        </Suspense>
      </Container>
    </>
  );
}
