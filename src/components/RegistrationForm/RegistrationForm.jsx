import { ErrorMessage, Field, Form, Formik } from 'formik';
import { RegisterUserSchema } from '../../utils/schemas';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/operations';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import css from './RegistrationForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = (values, actions) => {
    console.log('values: ', values);
    dispatch(register(values));
    actions.resetForm();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name:</span>
          <Field
            type="text"
            name="name"
            className={css.input}
            placeholder="Ivan Ivanov"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
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
          <div className={css.passwordField}>
            <Field
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              className={css.input}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={css.eyeButton}
              aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={css.btn}>
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
