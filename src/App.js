import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense } from 'react';
import { Switch } from 'react-router-dom';

// components
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import UserMenu from './components/UserMenu';

// pages
import RegistrationPage from './views/RegistrationPage';
import LoginPage from './views/LoginPage';
import PhoneBookPage from './views/PhoneBookPage';
import HomePage from './views/HomePage';

import { authOperations, authSelectors } from './redux/auth';

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelectors.getAuthStatus);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <>
      {isAuth && <UserMenu />}

      <Container>
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
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
          </Suspense>
        </Switch>
      </Container>
      <Toaster position="top-right" />
    </>
  );
}
