import React, { useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Form/Input/Input';
import { signUpValidationSchema } from '../../components/Form/schemas/signUpValidationSchema';
import { useAuth } from '../../contexts/AuthContext';
import {
  ChangeRouteButton, Container, CustomLink, SignupBox, SignUpError, SubmitButton, Title,
} from './styles';

export default function SignUpPage() {
  const [hasSignUpFailed, setHasSignUpFailed] = useState(false);

  const navigate = useNavigate();
  const { signUp } = useAuth();
  async function onSubmit(values, { setSubmitting }) {
    try {
      await signUp(values.email, values.password);
      navigate('/');
    } catch (error) {
      setHasSignUpFailed(true);
    }
    setSubmitting(false);
  }

  return (
    <Container>
      <SignupBox>
        <Formik
          initialValues={{ email: '', password: '', passwordConfirmation: '' }}
          validationSchema={signUpValidationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Title>
                Sign up
              </Title>
              {hasSignUpFailed && (
                <SignUpError>
                  Failed to sign up
                </SignUpError>
              )}
              <Input
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.email}
                error={errors.email}
                touched={touched.email}
                type="email"
                name="email"
              />
              <Input
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
                error={errors.password}
                touched={touched.password}
                type="password"
                name="password"
              />
              <Input
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.passwordConfirmation}
                error={errors.passwordConfirmation}
                touched={touched.passwordConfirmation}
                type="password"
                name="passwordConfirmation"
                label="Password Confirmation"
              />
              <SubmitButton type="submit" disabled={isSubmitting}>
                Register
              </SubmitButton>
            </form>
          )}
        </Formik>
        <ChangeRouteButton type="button">
          Already have an account?
          <CustomLink to="/login">
            Login
          </CustomLink>
        </ChangeRouteButton>
      </SignupBox>
    </Container>
  );
}
