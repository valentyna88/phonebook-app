import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <div>
      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>
      <NavLink className={buildLinkClass} to="/register">
        Registration
      </NavLink>
    </div>
  );
};

export default AuthNav;
