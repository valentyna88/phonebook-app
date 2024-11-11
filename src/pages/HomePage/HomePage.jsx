import { FaAddressBook, FaUserShield } from 'react-icons/fa';
import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';

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
          <p className={css.callToActionText}>
            Ready to get started? <FaUserShield className={css.iconShield} />
          </p>
          <button className={css.authButton}>Log In / Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
