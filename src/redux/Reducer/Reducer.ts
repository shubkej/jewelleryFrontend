import { combineReducers, Reducer as ReduxReducer } from "@reduxjs/toolkit";
import authSlice from "../Features/Auth/AuthSlice";
import employeesSlice from "../Features/Employee/EmployeeSlice";
import roleSlice from "../Features/Role/RoleSlice";

export const rootReducer: ReduxReducer = combineReducers({
  auth: authSlice,
  employees: employeesSlice,
  roles: roleSlice,
}) as ReduxReducer;
