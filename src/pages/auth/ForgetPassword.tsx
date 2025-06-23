import { Box, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import InputFieldComponent from '../../components/InputFieldComponent/InputFieldComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useFormik } from 'formik';
import { ForgetPasswordSchema } from '../../schema';
import { ContainerCard, inputStyles } from './ContainerCard';
import { useDispatch } from 'react-redux';
import { forgetPassword } from '../../redux/Features/Auth/AuthThunk';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  email: '',
};

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: ForgetPasswordSchema,
    onSubmit: async (values, actions) => {
      try {
        const res = await dispatch(forgetPassword(values));
        if (res?.payload?.status === 200) {
          toast.success(res?.payload?.data?.message);
          navigate('/optverfication', { state: { email: values.email } });
        }
      } catch (error: any) {
        toast.error(error);
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
      <ContainerCard>
        <Stack spacing={3} component="form" onSubmit={formik.handleSubmit}>
          <Typography
            variant={isSm ? 'h5' : 'h4'}
            textAlign="center"
            fontWeight={600}
            gutterBottom
          >
            Forget Password
          </Typography>

          <InputFieldComponent
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            autoComplete="off"
            placeHolder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            sx={inputStyles}
          />
          {formik.touched.email && formik.errors.email && (
            <Typography
              variant="caption"
              color="error"
              sx={{ textAlign: 'start' }}
            >
              {formik.errors.email}
            </Typography>
          )}
          <ButtonComponent
            text="Send OTP"
            sx={{
              bgcolor: '#fff',
              color: '#000',
              fontWeight: 600,
              '&:hover': { bgcolor: 'gray' },
            }}
            type="submit"
          />
        </Stack>
      </ContainerCard>
    </Box>
  );
};

export default ForgetPassword;
