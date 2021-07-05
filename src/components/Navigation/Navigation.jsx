import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            exact
            to="/"
            className={css.navLink}
            activeClassName={css.navLinkActive}
          >
            Home
          </NavLink>
        </li>

        <li className={css.navItem}>
          <NavLink
            exact
            to="/movies"
            className={css.navLink}
            activeClassName={css.navLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
