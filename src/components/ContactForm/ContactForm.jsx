import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../../redux/contacts/operations';
import { closeEditModal } from '../../redux/contacts/slice';
import { ContactSchema } from '../../utils/schemas';

export default function ContactForm({
  initialValues = { name: '', number: '' },
  isEditMode = false,
  contactId,
}) {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeEditModal());
  };

  const handleSubmit = (values, actions) => {
    if (isEditMode) {
      dispatch(updateContact({ contactId, ...values }));
      closeModal();
    } else {
      dispatch(
        addContact({
          name: values.name,
          number: values.number,
        })
      );
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <Field className={css.field} type="text" name="name" id="name"></Field>
        <ErrorMessage className={css.error} name="name" component="div" />
        <label className={css.label} htmlFor="number">
          Number
        </label>
        <Field
          className={css.field}
          type="text"
          name="number"
          id="number"
          placeholder="xxx-xx-xx"
        ></Field>
        <ErrorMessage className={css.error} name="number" component="div" />
        <button className={css.btn} type="submit">
          {isEditMode ? 'Edit contact' : 'Add contact'}
        </button>
      </Form>
    </Formik>
  );
}
