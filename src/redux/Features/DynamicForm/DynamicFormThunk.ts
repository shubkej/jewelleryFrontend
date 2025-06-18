import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import DynamicForm from "../../../services/DynamicForm/DynamicForm";

export const creatingFeedbackForm: any = createAsyncThunk(
  "createFeedbackForm",
  async (data: any) => {
    const response: AxiosResponse = await DynamicForm.createFeedbackForm(data);
    return response;
  }
);

export const fetchingFeedbackById: any = createAsyncThunk(
  "fetchFeedbackById",
  async (id: string) => {
    const response: AxiosResponse = await DynamicForm.fetchFeedbackById(id);
    return response;
  }
);
