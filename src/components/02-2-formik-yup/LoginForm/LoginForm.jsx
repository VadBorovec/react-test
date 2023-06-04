import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

import Button from '../ui/Button';
import './LoginForm.scss';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  color: teal;
`;

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const { login, password } = e.target.elements;
  //   console.log(login.value, password.value);
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className="Form" autoComplete="off">
        <label className="Form__label" htmlFor="login">
          Login
          <Input className="Form__input" type="text" name="login" />
          <ErrorMessage className="Form__text" name="login" component="div" />
        </label>
        <label className="Form__label" htmlFor="password">
          Password
          <Input className="Form__input" type="password" name="password" />
          <ErrorMessage
            className="Form__text"
            name="password"
            component="div"
          />
        </label>
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};
