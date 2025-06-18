import { AxiosResponse } from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  deletingRoleById,
  fetchingRolesData,
  updatingRoleById,
} from "./RoleThunk";

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

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    role: (state: AuthState, actions: PayloadAction<AxiosResponse>) => {
      state.data = actions?.payload?.data?.data;
      state.status = "succeeded";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchingRolesData.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(
        fetchingRolesData.fulfilled,
        (state, actions: PayloadAction<any>) => {
          state.status = "succeeded";
          state.isLoading = false;
          state.data = actions?.payload?.data?.payload;
        }
      )
      .addCase(
        fetchingRolesData.rejected,
        (state, actions: PayloadAction<string | undefined>) => {
          state.status = "failed";
          state.isLoading = true;
          state.error = actions?.payload ? actions?.payload : "Unknow error";
        }
      );

    builder
      .addCase(deletingRoleById.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(
        deletingRoleById.fulfilled,
        (state, actions: PayloadAction<any>) => {
          state.status = "succeeded";
          state.isLoading = false;
          const deleteRoleId = actions.payload?.data?.data?._id;
          state.data = state?.data?.filter(
            (item: any) => item?._id !== deleteRoleId
          );
        }
      )
      .addCase(
        deletingRoleById.rejected,
        (state, actions: PayloadAction<string | undefined>) => {
          state.status = "failed";
          state.isLoading = true;
          state.error = actions?.payload ? actions?.payload : "Unknow error";
        }
      );
    builder
      .addCase(updatingRoleById.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(
        updatingRoleById.fulfilled,
        (state, actions: PayloadAction<any>) => {
          const updatedItem = actions?.payload?.data?.data;
          const updatedData = state?.data?.map((item: any) =>
            item?._id === updatedItem?._id ? updatedItem : item
          );
          return {
            ...state,
            status: "succeeded",
            isLoading: false,
            data: updatedData,
          };
        }
      )
      .addCase(
        updatingRoleById.rejected,
        (state, actions: PayloadAction<string | undefined>) => {
          state.status = "failed";
          state.isLoading = true;
          state.error = actions?.payload ? actions?.payload : " Unknow error";
        }
      );
  },
});

export const { role } = roleSlice.actions;
export default roleSlice.reducer;
