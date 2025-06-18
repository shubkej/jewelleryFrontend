import { AxiosResponse } from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  deletingEmployeeById,
  fetchingEmployeeData,
  updatingEmployeeById,
} from "./EmployeeThunk";

const initialValue: any = {
  data: [],
};

interface AuthState {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: AxiosResponse | any[] | null;
  error: AxiosResponse | string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  status: "idle",
  data: initialValue,
  error: null,
  isLoading: false,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    employees: (state: AuthState, actions: PayloadAction<AxiosResponse>) => {
      state.data = actions.payload?.data?.data;
      state.status = "succeeded";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchingEmployeeData.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(
        fetchingEmployeeData.fulfilled,
        (state, actions: PayloadAction<any>) => {
          state.status = "succeeded";
          state.isLoading = false;
          state.data = actions.payload?.data?.payload

        }
      )
      .addCase(
        fetchingEmployeeData.rejected,
        (state, actions: PayloadAction<string | undefined>) => {
          state.status = "failed";
          state.isLoading = true;
          state.error = actions?.payload ? actions?.payload : "Unknown error";
        }
      );
    builder
      .addCase(deletingEmployeeById.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(
        deletingEmployeeById.fulfilled,
        (state, actions: PayloadAction<any>) => {
          state.status = "succeeded";
          state.isLoading = false;
          if (Array.isArray(state.data)) {
            const deleteEmpId = actions.payload?.data?.payload?._id;
            state.data = state?.data?.filter(
              (item: any) => item?._id !== deleteEmpId
            );
          }
        }
      )
      .addCase(
        deletingEmployeeById.rejected,
        (state, actions: PayloadAction<string | undefined>) => {
          state.status = "failed";
          state.isLoading = true;
          state.error = actions?.payload ? actions?.payload : "Unknown error";
        }
      );
    builder
      .addCase(updatingEmployeeById.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(
        updatingEmployeeById.fulfilled,
        (state, actions: PayloadAction<any>) => {
          const updatedItem = actions?.payload?.data?.payload;

          // Make sure state.data is an array before mapping it
          if (Array.isArray(state.data)) {
            const updatedData = state.data.map((item: any) =>
              item?._id === updatedItem?._id ? updatedItem : item
            );
            return {
              ...state,
              status: "succeeded",
              isLoading: false,
              data: updatedData,
            };
          } else {
            // If data isn't an array, return the state unchanged
            return state;
          }
        }
      )

      .addCase(
        updatingEmployeeById.rejected,
        (state, actions: PayloadAction<string | undefined>) => {
          state.status = "failed";
          state.isLoading = true;
          state.error = actions?.payload ? actions?.payload : "Unkone error";
        }
      );
  },
});


export const { employees } = employeesSlice.actions;
export default employeesSlice.reducer;
