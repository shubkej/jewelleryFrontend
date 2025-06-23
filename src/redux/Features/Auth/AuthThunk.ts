import { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Auth from '../../../services/Auth/Auth';
import {
  ForgetPasswordType,
  LoginType,
  OtpVerificationType,
  SignUpType,
} from '../../../types/Auth/AuthTypes';

// export const login: any = createAsyncThunk('login', async (data: LoginType) => {
//   const response: AxiosResponse = await Auth.login(data);
//   console.log('response:::', response);
//   return response;
// });

export const login = createAsyncThunk(
  'login',
  async (data: LoginType, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await Auth.login(data);
      console.log('response', response);
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const signUp: any = createAsyncThunk(
  'signUp',
  async (data: SignUpType) => {
    const response: AxiosResponse = await Auth.signUp(data);
    return response;
  },
);
export const otpVerify: any = createAsyncThunk(
  'otpVerify',
  async (data: OtpVerificationType) => {
    const response: AxiosResponse = await Auth.verifyOtp(data);
    return response;
  },
);
export const forgetPassword: any = createAsyncThunk(
  'forgetPassword',
  async (data: ForgetPasswordType) => {
    const response: AxiosResponse = await Auth.forgetPassword(data);
    return response;
  },
);
