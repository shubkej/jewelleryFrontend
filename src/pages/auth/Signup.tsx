import {
  Box,
  Stack,
  Typography,
  IconButton,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import InputFieldComponent from '../../components/InputFieldComponent/InputFieldComponent';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useFormik } from 'formik';
import { SignupSchema } from '../../schema';
import { Link, useNavigate } from 'react-router-dom';
import { ContainerCard, inputStyles } from './ContainerCard';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/Features/Auth/AuthThunk';
import toast from 'react-hot-toast';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formik = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: async (values, actions) => {
      try {
        const res = await dispatch(signUp(values));
        debugger;
        if (res?.payload?.status === 201) {
          toast.success(res?.payload?.data?.message);
          actions.resetForm();
          navigate('/optverfication', { state: { email: values.email } });
        }
        
      } catch (error: any) {
        toast.error(error);
      }
    },
  });

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <ContainerCard elevation={6}>
        <Stack spacing={3} component="form" onSubmit={formik.handleSubmit}>
          <Typography
            variant={isSm ? 'h5' : 'h4'}
            textAlign="center"
            fontWeight={500}
          >
            Create Account
          </Typography>

          <InputFieldComponent
            label="First Name"
            name="firstName"
            autoComplete="off"
            type="text"
            placeHolder="Enter your first name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            sx={inputStyles}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <Typography variant="caption" color="error">
              {formik.errors.firstName}
            </Typography>
          )}

          <InputFieldComponent
            label="Last Name"
            name="lastName"
            autoComplete="off"
            type="text"
            placeHolder="Enter your last name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            sx={inputStyles}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <Typography variant="caption" color="error">
              {formik.errors.lastName}
            </Typography>
          )}

          <InputFieldComponent
            label="Email"
            name="email"
            autoComplete="off"
            type="text"
            placeHolder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            sx={inputStyles}
          />
          {formik.touched.email && formik.errors.email && (
            <Typography variant="caption" color="error">
              {formik.errors.email}
            </Typography>
          )}

          <InputFieldComponent
            label="Password"
            name="password"
            autoComplete="off"
            type={showPassword ? 'text' : 'password'}
            placeHolder="Enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            sx={inputStyles}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  edge="end"
                  sx={{ color: '#fff' }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.touched.password && formik.errors.password && (
            <Typography variant="caption" color="error">
              {formik.errors.password}
            </Typography>
          )}

          <ButtonComponent
            text="Sign Up"
            sx={{
              bgcolor: '#fff',
              color: '#000',
              fontWeight: 600,
              '&:hover': { bgcolor: 'gray' },
            }}
            type="submit"
          />

          <Typography variant="body2" textAlign="center">
            Already have an account?{' '}
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span style={{ color: '#FF6B6B' }}>Login</span>
            </Link>
          </Typography>
        </Stack>
      </ContainerCard>
    </Box>
  );
};

export default Signup;
