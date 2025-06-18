import { ForgetPasswordType, LoginType, OtpVerificationType, ResendOtpType, SignUpType } from '../../types/Auth/AuthTypes';
import { doFetch, REQUEST_METHODS } from '../fetcher';
import AUTH_API_ENDPOINTS from './AuthApiEndPoints';

export default {
  login: (loginDetails: LoginType) =>
    doFetch(AUTH_API_ENDPOINTS.LOGIN, REQUEST_METHODS.POST, loginDetails),

  signUp: (signupDetails: SignUpType) =>
    doFetch(AUTH_API_ENDPOINTS.SINGUP, REQUEST_METHODS.POST, signupDetails),

  verifyOtp: (verifyOtpDetails: OtpVerificationType) =>
    doFetch(
      AUTH_API_ENDPOINTS.OTPVERVICATION,
      REQUEST_METHODS.POST,
      verifyOtpDetails,
    ),

  resendOtp: (resendOtpDetails: ResendOtpType) =>
    doFetch(
      AUTH_API_ENDPOINTS.RESENDOTP,
      REQUEST_METHODS.POST,
      resendOtpDetails,
    ),

  forgetPassword: (forgetPasswordDetails: ForgetPasswordType) =>
    doFetch(
      AUTH_API_ENDPOINTS.FORGETPASSWORD,
      REQUEST_METHODS.POST,
      forgetPasswordDetails,
    ),

  resetPassword: (resetPasswordDetails: ResendOtpType) =>
    doFetch(
      AUTH_API_ENDPOINTS.RESETPASSWORD,
      REQUEST_METHODS.POST,
      resetPasswordDetails,
    ),
};
