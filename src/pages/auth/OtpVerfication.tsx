import { Box, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import InputFieldComponent from '../../components/InputFieldComponent/InputFieldComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useFormik } from 'formik';
import { otpSchema } from '../../schema';
import { ContainerCard, inputStyles } from './ContainerCard';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { otpVerify } from '../../redux/Features/Auth/AuthThunk';
import toast from 'react-hot-toast';

const initialValues = {
  otp: '',
};

const OtpVerification = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const formik = useFormik({
    initialValues,
    validationSchema: otpSchema,
    onSubmit: async (values, actions) => {
      const otpPayload = { ...values, email };
      try {
        const res = await dispatch(otpVerify(otpPayload));
        if (res?.payload?.status === 200) {
          toast.success(res?.payload?.data?.message);
          navigate('/login');
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
            fontWeight={500}
            gutterBottom
          >
            OTP Verification
          </Typography>

          <InputFieldComponent
            label="OTP"
            variant="outlined"
            name="otp"
            autoComplete="off"
            type="text"
            placeHolder="Enter OTP"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.otp}
            sx={inputStyles}
          />
          {formik.touched.otp && formik.errors.otp && (
            <Typography
              variant="caption"
              color="error"
              sx={{ textAlign: 'start' }}
            >
              {formik.errors.otp}
            </Typography>
          )}

          <Typography
            onClick={() => alert('otp send')}
            variant="body2"
            sx={{ color: '#FF6B6B', cursor: 'pointer', textAlign: 'right' }}
          >
            Resend Otp
          </Typography>

          <ButtonComponent
            text="Verify OTP"
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

export default OtpVerification;
