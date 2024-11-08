import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import {
  selectUserData,
  selectUserDataIsLoggedIn,
} from "../../redux/auth/slice";

const buildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Navigation = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  const userData = useSelector(selectUserData);

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
            <button type="button">Logout</button>
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
