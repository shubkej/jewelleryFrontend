import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import InputFieldComponent from '../../components/InputFieldComponent/InputFieldComponent';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useFormik } from 'formik';
import { ResetSchema } from '../../schema';
import { ContainerCard, inputStyles } from './ContainerCard';

const initialValues = {
  newpassword: '',
  confirmpassword: '',
};

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const formik = useFormik({
    initialValues,
    validationSchema: ResetSchema,
    onSubmit: (values, actions) => {
      console.log('values', values);
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
          >
            Reset Password
          </Typography>

          <InputFieldComponent
            label="New Password"
            name="newpassword"
            autoComplete="off"
            placeHolder="Enter new password"
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newpassword}
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
          {formik.touched.newpassword && formik.errors.newpassword && (
            <Typography variant="caption" color="error">
              {formik.errors.newpassword}
            </Typography>
          )}

          <InputFieldComponent
            label="Confirm Password"
            name="confirmpassword"
            autoComplete="off"
            placeHolder="Confirm your password"
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmpassword}
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
          {formik.touched.confirmpassword && formik.errors.confirmpassword && (
            <Typography variant="caption" color="error">
              {formik.errors.confirmpassword}
            </Typography>
          )}

          <ButtonComponent
            text="Reset Password"
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

export default ResetPassword;
