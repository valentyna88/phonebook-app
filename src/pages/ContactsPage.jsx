import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import Loader from '../components/Loader/Loader';
import DocumentTitle from '../components/DocumentTitle';
import ContactModal from '../components/ContactModal/ContactModal'; // Імпорт модалки

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '700',
    color: '#2c6b2f',
    textAlign: 'center',
    marginBottom: '20px',
  };

  return (
    <div>
      <DocumentTitle>Phonebook</DocumentTitle>
      <h1 style={titleStyle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {error && (
        <p>
          Oops, some error occurred &quot;{error}&quot;. Please, try again
          later.
        </p>
      )}
      <ContactList />
      <ContactModal /> {/* Додаємо ContactModal наприкінці */}
    </div>
  );
};

export default ContactsPage;
