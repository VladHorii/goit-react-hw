import { Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import Navigation from './components/Navigation';
// import Searchbar from './components/Searchbar';

export default function App() {
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
        </Switch>
      </Container>
    </>
  );
}
