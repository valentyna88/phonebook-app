import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserData,
  selectUserDataIsLoggedIn,
} from '../../redux/auth/slice';
import { logout } from '../../redux/auth/operations';

const buildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  const userData = useSelector(selectUserData);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={buildLinkClass} to="/">
          HomePage
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
        {isLoggedIn ? (
          <div>
            <span>Hello, {userData.name}</span>
            <button onClick={onLogout} type="button">
              Logout
            </button>
          </div>
        ) : (
          <>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
            <NavLink className={buildLinkClass} to="/register">
              Registration
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
