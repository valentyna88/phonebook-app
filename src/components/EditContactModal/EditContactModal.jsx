import Modal from 'react-modal';
import css from './EditContactModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import { closeEditModal } from '../../redux/contacts/slice';

const EditContactModal = () => {
  const dispatch = useDispatch();
  const isEditModalOpen = useSelector(state => state.contacts.isEditModalOpen);
  const contactToEdit = useSelector(state => state.contacts.contactToEdit);

  const closeModal = () => {
    dispatch(closeEditModal());
  };

  return (
    <Modal
      className={css.modal}
      isOpen={isEditModalOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <h2 className={css.title}>Edit Contact</h2>
      {contactToEdit && (
        <ContactForm
          initialValues={contactToEdit}
          isEditMode={true}
          contactId={contactToEdit.id}
        />
      )}
    </Modal>
  );
};

export default EditContactModal;
