import {
  EmployeeAssign,
  EmployeeEditPayloadType,
  EmployeePayloadDataType,
} from "../../types/Employee/EmployeeTypes";
import { doFetch, REQUEST_METHODS } from "../fetcher";
import EMPLOYEES_API_ENDPOINTS from "./EmployeesApiEndPoints";

export default {
  fetchEmployeeData: (page: any, pageSize: any) =>
    doFetch(`${EMPLOYEES_API_ENDPOINTS.GET}?page=${page}&limit=${pageSize}`, REQUEST_METHODS.GET),

  deleteEmployeeById: (id: string) =>
    doFetch(`${EMPLOYEES_API_ENDPOINTS.DELETE}/${id}`, REQUEST_METHODS.DELETE),

  updateEmployeeById: (payload: EmployeeEditPayloadType) => {
    const { formData, id } = payload;
    return doFetch(
      `${EMPLOYEES_API_ENDPOINTS.PUT}/${id}`,
      REQUEST_METHODS.PUT,
      formData
    );
  },

  createEmployee: (payload: EmployeePayloadDataType) =>
    doFetch(EMPLOYEES_API_ENDPOINTS.POST, REQUEST_METHODS.POST, payload),

  fetchEmployeeName: () =>
    doFetch(EMPLOYEES_API_ENDPOINTS.FETCH_EMPLOYEENAME, REQUEST_METHODS.GET),

  assignEmployeeTo: (payload: EmployeeAssign) =>
    doFetch(EMPLOYEES_API_ENDPOINTS.ASSIGN_EMPLOYEETO, REQUEST_METHODS.POST, payload),

  fetchFeedbackEmployee: (role_id: string) =>
    doFetch(`${EMPLOYEES_API_ENDPOINTS.FETCHFEEDBACKEMPLOYEE}/${role_id}`, REQUEST_METHODS.GET),

  createFeedbackEmployeeReview: (payload: any) =>
    doFetch(`${EMPLOYEES_API_ENDPOINTS.CREATEDFEEDBACKEMPLOYEEREVIEW}`, REQUEST_METHODS.POST, payload),

  fetchPaginationEmployee: () =>
    doFetch(EMPLOYEES_API_ENDPOINTS.FETCH_PAGINATIONEMPLOYEE, REQUEST_METHODS.GET),

  fetchExcelData: () =>
    doFetch(`${EMPLOYEES_API_ENDPOINTS.FETCH_EXCELDATA}`, REQUEST_METHODS.GET),

  fetchFeedBackByReviewId: (review_id: any, page: any, pageSize: any) =>
    doFetch(`${EMPLOYEES_API_ENDPOINTS.FETCHFEEDBACKFORMREVIWERID}/${review_id}?page=${page}&limit=${pageSize}`, REQUEST_METHODS.GET),

  updatingFeedback: (payload: any) => {
    console.log('payload', payload)
    return doFetch(
      `${EMPLOYEES_API_ENDPOINTS.UPDATEFEEDBACK}`,
      REQUEST_METHODS.PUT,
      payload
    );
  },
};


