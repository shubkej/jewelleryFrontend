import { AxiosResponse } from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginType } from "../../../types/Auth/AuthTypes";

const initialValue: LoginType = {
  email: "",
  password: "",
};

interface AuthState {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: AxiosResponse | any | null;
  error: AxiosResponse | string | null;
  isLoading: boolean;
}
const initialState: AuthState = {
  status: "idle",
  data: initialValue,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state: AuthState, actions: PayloadAction<AxiosResponse>) => {
      state.data = actions.payload?.data;
      state.status = "succeeded";
      state.isLoading = false;
    },
  },
  extraReducers: () => {},
});

export const { auth } = authSlice.actions;
export default authSlice.reducer;
