import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { ContactSchema } from '../../utils/schemas.js';
import { formatPhoneNumber } from '../../utils/schemas.js';
import css from './ContactForm.module.css';

const INITIAL_VALUES = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label className={css.label}>Name</label>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage
            name="name"
            component="p"
            className={css.errorMessage}
          />
        </div>

        <div className={css.wrapper}>
          <label className={css.label}>Number</label>
          <Field name="number">
            {({ field, form }) => (
              <input
                {...field}
                className={css.field}
                onChange={e => {
                  const formattedNumber = formatPhoneNumber(e.target.value);
                  form.setFieldValue('number', formattedNumber);
                }}
              />
            )}
          </Field>
          <ErrorMessage
            name="number"
            component="p"
            className={css.errorMessage}
          />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
