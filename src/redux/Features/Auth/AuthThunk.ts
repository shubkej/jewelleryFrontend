import { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Auth from '../../../services/Auth/Auth';
import {
  LoginType,
  OtpVerificationType,
  SignUpType,
} from '../../../types/Auth/AuthTypes';

export const login: any = createAsyncThunk('login', async (data: LoginType) => {
  const response: AxiosResponse = await Auth.login(data);
  return response;
});

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
