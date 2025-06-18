import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Roles from "../../../services/Roles/Roles";
import { RolesPayloadDataType } from "../../../types/Role/RoleTypes";

export const fetchingRolesData: any = createAsyncThunk(
  "fetchRolesData",
  async () => {
    const response: AxiosResponse = await Roles.fetchRolesData();
    return response;
  }
);

export const deletingRoleById: any = createAsyncThunk(
  "deleteRoleById",
  async (id: string) => {
    const response: AxiosResponse = await Roles.deleteRoleById(id);
    return response;
  }
);

export const updatingRoleById: any = createAsyncThunk(
  "updateRoleById",
  async (data: any) => {
    const response: AxiosResponse = await Roles.updateRoleById(data);
    return response;
  }
);

export const creatingRole: any = createAsyncThunk(
  "createRole",
  async (data: any) => {
    const response: AxiosResponse = await Roles.createRole(data);
    return response;
  }
);
