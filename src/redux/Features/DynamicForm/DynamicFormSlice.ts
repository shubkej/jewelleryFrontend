import { AxiosResponse } from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialValue: any = {
  data: [],
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

const dynamicFormSlice = createSlice({
  name: "dynamicForm",
  initialState,
  reducers: {
    dynamicForm: (state: AuthState, actions: PayloadAction<AxiosResponse>) => {
      state.data = actions.payload?.data?.data;
      state.status = "succeeded";
      state.isLoading = false;
    },
  },
});
