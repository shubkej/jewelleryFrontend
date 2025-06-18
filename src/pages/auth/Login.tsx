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
import { LoginSchema } from '../../schema';
import { Link } from 'react-router-dom';
import { ContainerCard, inputStyles } from './ContainerCard';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Features/Auth/AuthThunk';
import toast from 'react-hot-toast';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async(values, actions) => {
      try {
        const res = await dispatch(login(values));
        debugger
        if (res?.payload?.data?.status === 200) {
          toast.success(res?.payload?.data?.message);
          localStorage.setItem('authToken', res?.payload?.data?.payload?.token);
        }
      } catch (error) {
        console.log('Error : ', error);
      }

      actions.resetForm();
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
            Welcome Back
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            sx={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Please enter your login credentials
          </Typography>

          <InputFieldComponent
            label="Email"
            name="email"
            type="text"
            autoComplete="off"
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

          <Box textAlign="right">
            <Link to="/forgetpassword" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" sx={{ color: '#FF6B6B' }}>
                Forgot password?
              </Typography>
            </Link>
          </Box>

          <ButtonComponent
            text="Login"
            sx={{
              bgcolor: '#fff',
              color: '#000',
              fontWeight: 600,
              '&:hover': { bgcolor: 'gray' },
            }}
            type="submit"
          />
          <Typography variant="body2" textAlign="center">
            Don’t have an account?
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <span style={{ color: '#FF6B6B' }}>Register</span>
            </Link>
          </Typography>
        </Stack>
      </ContainerCard>
    </Box>
  );
};

export default Login;
