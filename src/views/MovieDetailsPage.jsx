import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';

import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MovieService from '../services/moviesApi';
import LoaderSpinner from '../components/LoaderSpinner';

const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

const movieService = new MovieService();

const STATIC_IMG_PATH = 'https://image.tmdb.org/t/p/original/';
const imgNotFound =
  'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const { url } = useRouteMatch();

  const location = useLocation();
  const history = useHistory();

  const goBackLocation = location?.state?.from;

  useEffect(() => {
    movieService.fetchMovieInfo(movieId).then(setMovieInfo);
  }, [movieId]);

  const onClickGoBackBtn = () => {
    history.push(goBackLocation);
  };
  return (
    <>
      {goBackLocation && (
        // <button type="button" onClick={onClickGoBackBtn}>
        //   {'<= Go back'}
        // </button>
        <Button
          variant="contained"
          color="default"
          startIcon={<ArrowBackIcon />}
          type="button"
          onClick={onClickGoBackBtn}
        >
          Go back
        </Button>
      )}
      {movieInfo && (
        <>
          <div className="movie-details-container">
            <img
              src={
                movieInfo.poster_path
                  ? `${STATIC_IMG_PATH}${movieInfo.poster_path}`
                  : imgNotFound
              }
              alt={movieInfo.original_title}
              width="240"
            />
            <div className="movie-details-info">
              <h3>{movieInfo.original_title}</h3>
              <p>User Score: {movieInfo.vote_average * 10}%</p>
              <h4>Genres</h4>
              <p>{movieInfo.genres.map(({ name }) => name).join(', ')}</p>
              <h4>Overview</h4>
              <p>{movieInfo.overview}</p>
            </div>
          </div>

          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${url}/cast`,
                  state: { from: goBackLocation },
                }}
              >
                <Button color="primary" variant="outlined">
                  Cast
                </Button>
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: goBackLocation },
                }}
              >
                <Button color="primary" variant="outlined">
                  Reviews
                </Button>
              </Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<LoaderSpinner />}>
            <Switch>
              <Route path={`${url}/cast`}>
                <Cast
                  id={movieId}
                  imgPath={STATIC_IMG_PATH}
                  imgNotFound={imgNotFound}
                />
              </Route>
              <Route path={`${url}/reviews`}>
                <Reviews id={movieId} />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
}
