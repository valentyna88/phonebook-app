import { ErrorMessage, Field, Form, Formik } from 'formik';
import { LoginUserSchema } from '../../utils/schemas';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log('values: ', values);
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Email:</span>
          <Field
            type="text"
            name="email"
            className={css.input}
            placeholder="example.email@example.com"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span>Password:</span>
          <Field
            type="password"
            name="password"
            className={css.input}
            placeholder="Enter your password"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={css.btn}>
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
