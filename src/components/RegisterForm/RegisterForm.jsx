import React from 'react';
import { FormikWizard } from 'formik-wizard-form';
import { Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { logIn, signUp } from '../../redux/auth/authOperations';
import { Container } from '../../components/common/Container.styled';
import { Link } from 'react-router-dom';
import { RegisterFormStepOne } from './RegisterFormStepOne';
import { RegisterFormStepTwo } from './RegisterFormStepTwo';

export const passwordRegexp = /^[A-Za-z0-9!?#$%^&_\-*]{7,32}$/;
export const nameRegexp = /^[a-zA-Z]{2,20}$/;
export const phoneRegexp = /^\+380\d{9}$/;
export const emailRegexp =
  /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = values => {
    dispatch(logIn(values)).then(resp => {
      if (resp.meta.requestStatus === 'fulfilled') {
        navigate('/user', { replace: true });
      }
      return;
    });
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    city: '',
    phone: '',
  };

  const schemaStepOne = yup.object({
    email: yup
      .string()
      .min(10, 'Email must consist of at least 10 symbols')
      .max(63, 'Email must contain no more than 63 symbols')
      .matches(emailRegexp, 'Please, enter a valid e-mail')
      .required('E-mail is required'),
    password: yup
      .string()
      .min(7, 'Password must consist of at least 7 symbols')
      .max(32, 'Password must contain no more than 32 symbols')
      .matches(passwordRegexp, 'Please, enter a valid password')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref('password')],
        'This password doesn`t match the previous one'
      )
      .required('Please, confirm your password'),
  });

  const schemaStepTwo = yup.object({
    name: yup
      .string()
      .min(2, 'Name must contain at least 2 symbol')
      .max(20, 'Name must contain no more than 20 symbols')
      .matches(
        nameRegexp,
        'Please, enter a valid name. For example, "Ivan" or "Mary"'
      )
      .required('Name is required'),
    city: yup.string().required('City is required'),
    phone: yup
      .string()
      .min(13, 'Insufficient number of symbols entered')
      .matches(
        phoneRegexp,
        'Please, enter the phone number in the format +380xxxxxxxxxxx'
      )
      .required('Phone is required'),
  });

  const handleSubmit = (
    { name, email, password, city, phone },
    { resetForm }
  ) => {
    const values = { email, password };
    dispatch(signUp({ name, email, password, city, phone })).then(resp => {
      if (resp.meta.requestStatus === 'fulfilled') {
        loginUser(values);
        resetForm();
      }
    });
  };

  return (
    <>
      <FormikWizard
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnNext
        activeStepIndex={0}
        steps={[
          {
            component: RegisterFormStepOne,
            validationSchema: schemaStepOne,
          },
          {
            component: RegisterFormStepTwo,
            validationSchema: schemaStepTwo,
          },
        ]}
      >
        {({ renderComponent, handlePrev, handleNext, isLastStep }) => (
          <Container>
            <div>
              <h2>Registration</h2>
              <Form>
                {renderComponent()}

                {!isLastStep ? (
                  <button type="button" onClick={handleNext}>
                    Next
                  </button>
                ) : (
                  <>
                    <button type="submit">Register</button>
                    <button type="button" onClick={handlePrev}>
                      Back
                    </button>
                  </>
                )}
              </Form>
              <p>
                <span>Already have an account? </span>
                <Link to="/login">Login</Link>
              </p>
            </div>
          </Container>
        )}
      </FormikWizard>
    </>
  );
};