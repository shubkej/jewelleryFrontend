import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Auth from "../../../services/Auth/Auth";
import { LoginType, SignUpType } from "../../../types/Auth/AuthTypes";

export const login: any = createAsyncThunk("login", async (data: LoginType) => {
  // debugger
  const response: AxiosResponse = await Auth.login(data);
  return response;
});

export const signUp: any = createAsyncThunk("signUp", async (data: SignUpType) => {
  debugger
  const response: AxiosResponse = await Auth.signUp(data);
  return response;
});
