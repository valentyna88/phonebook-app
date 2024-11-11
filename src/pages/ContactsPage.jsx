import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import Loader from '../components/Loader/Loader';
import DocumentTitle from '../components/DocumentTitle';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal/ConfirmDeleteModal';
import {
  selectDeleteModalIsOpen,
  selectActiveContact,
} from '../redux/modal/selectors';
import { closeDeleteModal } from '../redux/modal/slice';
import { toast } from 'react-hot-toast';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isDeleteModalOpen = useSelector(selectDeleteModalIsOpen);
  const activeContact = useSelector(selectActiveContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = () => {
    if (activeContact) {
      dispatch(deleteContact(activeContact.id))
        .unwrap()
        .then(() => {
          toast.success('Contact deleted successfully');
        })
        .catch(() => {
          toast.error('Error deleting contact');
        });
    }
    dispatch(closeDeleteModal());
  };

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
          Oops, some error occured &quot;{error}&quot;. Please, try again later.
        </p>
      )}
      <ContactList />
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen && activeContact !== null} // Модалка відкривається, тільки якщо є активний контакт
        onRequestClose={() => dispatch(closeDeleteModal())} // Закриваємо модалку
        onConfirm={handleDelete} // Підтверджуємо видалення
      />
    </div>
  );
};

export default ContactsPage;
