import Modal from 'react-modal';
import css from './ContactModal.module.css';
import { editContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { closeEditModal } from '../../redux/contacts/slice';
import { toast } from 'react-hot-toast';
import ContactForm from '../ContactForm/ContactForm';

Modal.setAppElement('#root');

const ContactModal = () => {
  const dispatch = useDispatch();
  const isEditModalOpen = useSelector(state => state.contacts.editModalIsOpen);
  const contactToEdit = useSelector(state => state.contacts.activeContact);

  const closeModal = () => {
    dispatch(closeEditModal());
  };

  const handleEdit = (values, actions) => {
    dispatch(
      editContact({
        id: contactToEdit.id,
        name: values.name,
        number: values.number,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('Contact successfully updated!');
        dispatch(closeEditModal());
      })
      .catch(() => {
        toast.error('Something went wrong. Try again!');
      });
    actions.resetForm();
  };

  return (
    <Modal
      className={css.modal}
      isOpen={isEditModalOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <h2 className={css.modalTitle}>Edit Contact</h2>
      {contactToEdit ? (
        <ContactForm
          initialValues={{
            name: contactToEdit.name || '',
            number: contactToEdit.number || '',
          }}
          isEditMode={true}
          contactId={contactToEdit.id}
          onSubmit={handleEdit}
        />
      ) : (
        <p>No contact selected for editing.</p>
      )}
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default ContactModal;
