import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

// components
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import UserMenu from './components/UserMenu';
import LoaderSpinner from './components/LoaderSpinner';

// utils
import { authOperations, authSelectors } from './redux/auth';

// pages
const RegistrationPage = lazy(() => import('./views/RegistrationPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));
const PhoneBookPage = lazy(() => import('./views/PhoneBookPage'));
const HomePage = lazy(() => import('./views/HomePage'));

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelectors.getAuthStatus);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <>
      {isAuth && <UserMenu />}

      <Switch>
        <Suspense fallback={<LoaderSpinner />}>
          <Container>
            <PublicRoute exact path="/" redirectTo="/contacts" restricted>
              <HomePage />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegistrationPage />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginPage />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <PhoneBookPage />
            </PrivateRoute>
          </Container>
        </Suspense>
      </Switch>
      <Toaster position="top-right" />
    </>
  );
}
