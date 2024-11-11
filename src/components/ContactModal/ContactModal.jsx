import Modal from 'react-modal';
import css from './ContactModal.module.css';
import { editContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { MdPerson, MdPhone } from 'react-icons/md';
import {
  selectActiveContact,
  selectEditModalIsOpen,
} from '../../redux/modal/selectors';
import { closeEditModal } from '../../redux/modal/slice';
import { ContactSchema } from '../../utils/schemas';
import { toast } from 'react-hot-toast';

Modal.setAppElement('#root');

const ContactModal = () => {
  const dispatch = useDispatch();
  const contactEdit = useSelector(selectActiveContact);
  const isOpen = useSelector(selectEditModalIsOpen);

  const handleEdit = (values, actions) => {
    dispatch(
      editContact({
        id: contactEdit.id,
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

  if (!contactEdit) return null;

  const initialValues = {
    name: contactEdit.name || '',
    number: contactEdit.number || '',
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => dispatch(closeEditModal())}
      className={css.modalEdit}
      overlayClassName={css.overlayEdit}
      contentLabel="Edit Modal"
      closeTimeoutMS={400}
    >
      <h2 className={css.delText}>Input changes:</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactSchema}
        onSubmit={handleEdit}
      >
        <Form className={css.contactBox}>
          <label className={css.label}>
            <MdPerson size={30} />
            <Field className={css.input} name="name" type="text" />
          </label>
          <ErrorMessage className={css.error} name="name" component="span" />
          <label className={css.label}>
            <MdPhone size={30} />
            <Field className={css.input} name="number" type="text" />
          </label>
          <ErrorMessage className={css.error} name="number" component="span" />
          <div className={css.btnWrapper}>
            <button type="submit" className={css.editBtn}>
              Save
            </button>
            <button
              onClick={() => dispatch(closeEditModal())}
              className={css.btn}
              type="button"
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default ContactModal;
