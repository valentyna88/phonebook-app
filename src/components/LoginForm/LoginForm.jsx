import { ErrorMessage, Field, Form, Formik } from 'formik';
import { LoginUserSchema } from '../../utils/schemas';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../../redux/auth/operations';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import css from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = (values, actions) => {
    console.log('values: ', values);
    dispatch(login(values));
    actions.resetForm();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
