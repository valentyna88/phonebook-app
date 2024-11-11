import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../redux/contacts/operations';
import {
  selectEditModalIsOpen,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import Loader from '../components/Loader/Loader';
import DocumentTitle from '../components/DocumentTitle';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal/ConfirmDeleteModal';
import ContactModal from '../components/ContactModal/ContactModal'; // імпортуємо ContactModal
import {
  selectDeleteModalIsOpen,
  selectActiveContact,
} from '../redux/contacts/selectors';
import { closeDeleteModal, closeEditModal } from '../redux/contacts/slice';
import { toast } from 'react-hot-toast';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isEditModalOpen = useSelector(selectEditModalIsOpen);
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

  const handleCloseEditModal = () => {
    dispatch(closeEditModal()); // Закриваємо модалку редагування
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

      {/* Модалка для підтвердження видалення */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen && activeContact !== null} // Модалка відкривається, тільки якщо є активний контакт
        onRequestClose={() => dispatch(closeDeleteModal())} // Закриваємо модалку
        onConfirm={handleDelete} // Підтверджуємо видалення
      />

      {/* Модалка для редагування контакту */}
      <ContactModal
        isOpen={isEditModalOpen && activeContact !== null} // Відкриваємо, якщо модалка відкрита та є активний контакт
        onRequestClose={handleCloseEditModal} // Закриваємо модалку
        contact={activeContact} // Передаємо активний контакт в модалку
      />
    </div>
  );
};

export default ContactsPage;
