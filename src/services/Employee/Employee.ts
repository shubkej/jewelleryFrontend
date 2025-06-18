import { REQUEST_METHODS } from "../../api/axiosConfig";
import EMPLOYEE_API_ENDPOINTS from "./EmployeeApiEndPoints";
import ApiCliant from "../../api/axiosConfig";
import { EmployeePayloadDataType } from "../../types/Employee/EmployeeTypes";

export default {
  fetchEmployeeData: async () => {
    const response = await ApiCliant.get(EMPLOYEE_API_ENDPOINTS.GET);
    return response;
  },
  updateEmployeeById: async (id: any, payload: any) => {
    const response = await ApiCliant.put(
      `${EMPLOYEE_API_ENDPOINTS.PUT}/${id}`,
      payload
    );
    return response;
  },
  deleteEmployeeById: async (id: string) => {
    const response = await ApiCliant.delete(
      `${EMPLOYEE_API_ENDPOINTS.DELETE}/${id}`
    );
    return response;
  },
  createEmployee: async (payload: EmployeePayloadDataType) => {
    const response = await ApiCliant.post(EMPLOYEE_API_ENDPOINTS.POST, payload);
    return response;
  },
  // ----------------- NEW FETCHER ----------------------------
};
