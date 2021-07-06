import { Link, useRouteMatch, useLocation } from 'react-router-dom';

import Button from '@material-ui/core/Button';

export default function MoviesList({ movies }) {
  const routeUrl = useRouteMatch().url;
  const url = routeUrl === '/' ? '/movies' : routeUrl;
  const location = useLocation();

  return (
    <ul>
      {movies.length > 0 &&
        movies.map(movie => (
          <li key={movie.id} className="movies-list-item">
            <Link
              to={{
                pathname: `${url}/${movie.id}`,
                state: { from: location },
              }}
            >
              <Button color="primary" variant="outlined">
                {movie.original_title ?? 'no title :('}
              </Button>
            </Link>
          </li>
        ))}
    </ul>
  );
}
