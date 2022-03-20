import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
  passwordConfirmation: Yup.string()
    .required('Confimation password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
