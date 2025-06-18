import * as Yup from 'yup';

export const SignupSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .max(25, 'First name must be at most 25 characters')
    .required('Please enter your first name'),

  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(25, 'Last name must be at most 25 characters')
    .required('Please enter your last name'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Please enter your password'),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Please enter your password'),
});

export const ResetSchema = Yup.object({
  newpassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Please enter your new password'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('newpassword')], 'Passwords must match')
    .required('Please enter your confirm password'),
});
export const otpSchema = Yup.object({
  otp: Yup.string()
    .min(6, 'otp must be 6 characters')
    .required('Please enter your otp'),
});
export const ForgetPasswordSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email'),
});
