import { FaAddressBook, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>
          <FaAddressBook className={css.icon} /> Welcome to Your Personal
          Phonebook
        </h1>
        <p className={css.description}>
          Organize and secure your contacts in one place. Our app is designed to
          keep your information private and accessible only to you.
        </p>
        <div className={css.callToAction}>
          <p className={css.callToActionText}>Join us now to get started!</p>
          <div className={css.buttonGroup}>
            <NavLink to="/login" className={css.loginButton}>
              <FaSignInAlt className={css.buttonIcon} /> Log In
            </NavLink>
            <NavLink to="/register" className={css.registerButton}>
              <FaUserPlus className={css.buttonIcon} /> Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
