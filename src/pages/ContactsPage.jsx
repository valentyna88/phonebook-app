import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import Loader from '../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading, selectError } from '../redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const titleStyles = {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: '700',
    color: '#2196F3',
    marginBottom: '20px',
  };

  return (
    <div>
      <div>
        <h1 style={titleStyles}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && !error && <Loader />}
      </div>
      <ContactList />
    </div>
  );
}
