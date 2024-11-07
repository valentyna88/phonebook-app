import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={buildLinkClass} to="/">
          HomePage
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
        <NavLink className={buildLinkClass} to="/register">
          Registration
        </NavLink>
        <NavLink className={buildLinkClass} to="/login">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
