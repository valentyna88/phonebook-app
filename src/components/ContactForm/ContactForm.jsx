import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Name must be less than 50 characters')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone number format: xxx-xx-xx')
    .required('Required'),
});

const formatPhoneNumber = value => {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,3})(\d{0,2})(\d{0,2})$/);

  if (match) {
    return [match[1], match[2], match[3]].filter(Boolean).join('-');
  }
  return value;
};

const INITIAL_VALUES = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label>Name</label>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage
            name="name"
            component="p"
            className={css.errorMessage}
          />
        </div>

        <div className={css.wrapper}>
          <label>Number</label>
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
