import { combineReducers, Reducer as ReduxReducer } from "@reduxjs/toolkit";
import authSlice from "../Features/Auth/AuthSlice";

export const rootReducer: ReduxReducer = combineReducers({
  auth: authSlice,
}) as ReduxReducer;
