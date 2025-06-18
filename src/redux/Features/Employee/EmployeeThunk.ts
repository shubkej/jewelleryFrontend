import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Employees from "../../../services/Employees/Employees";
import {
  EmployeeAssign,
  EmployeeEditPayloadType,
  EmployeePayloadDataType,
} from "../../../types/Employee/EmployeeTypes";

export const fetchingEmployeeData: any = createAsyncThunk(
  "employeeData",
  async ({ page, pageSize }: any) => {
    const response: AxiosResponse = await Employees.fetchEmployeeData(page, pageSize);
    return response;
  }
);

export const deletingEmployeeById: any = createAsyncThunk(
  "deleteEmployeeById",
  async (id: string) => {
    const response: AxiosResponse = await Employees.deleteEmployeeById(id);
    console.log('response :: for delete', response)
    return response;
  }
);

export const updatingEmployeeById: any = createAsyncThunk(
  "updateEmployeeById",
  async (data: EmployeeEditPayloadType) => {
    const response: any = await Employees.updateEmployeeById(data);
    return response;
  }
);

export const creatingEmployee: any = createAsyncThunk(
  "createEmployee",
  async (data: EmployeePayloadDataType) => {
    const response = await Employees.createEmployee(data);
    return response;
  }
);

export const fetchEmployeeName: any = createAsyncThunk(
  "fetchEmployeeName",
  async () => {
    const response = await Employees.fetchEmployeeName()
    return response
  }
)

export const assignEmployeeTo: any = createAsyncThunk(
  "assignEmployeeTo",
  async (data: EmployeeAssign) => {
    const response = await Employees.assignEmployeeTo(data)
    return response
  }
)

export const fetchFeedbackEmployee: any = createAsyncThunk(
  "fetchfeedbackform",
  async (role_id: string) => {
    const response: AxiosResponse = await Employees.fetchFeedbackEmployee(role_id)
    return response;
  }
)

export const createEmployeeReview: any = createAsyncThunk(
  "createEmployeeReview",
  async (payload: any) => {
    const response: AxiosResponse = await Employees.createFeedbackEmployeeReview(payload)
    return response
  }
)

export const fetchPaginationEmployee: any = createAsyncThunk(
  "fetchPaginationEmployee",
  async () => {
    const response = await Employees.fetchPaginationEmployee()
    return response?.data?.payload;
  }
)

export const fetchExcelData: any = createAsyncThunk(
  "fetchExcelData",
  async () => {
    const response = await Employees.fetchExcelData()
    console.log("Response from excel:::", response)
    return response;
  }
)

export const fetchFeedBackByReviewId: any = createAsyncThunk(
  "fetchFeedBackByReviewId",
  async (params: { review_id: any; page: any; pageSize: any }) => {
    const { review_id, page, pageSize } = params;
    const response: AxiosResponse = await Employees.fetchFeedBackByReviewId(review_id, page, pageSize);
    return response.data; // Return the actual data from the API response
  }
);

export const updatingFeedback: any = createAsyncThunk(
  "updatingFeedback",
  async (data: EmployeeEditPayloadType) => {
    const response: any = await Employees.updatingFeedback(data);
    return response;
  }
);