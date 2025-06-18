import ROLE_API_ENDPOINTS from "./RoleApiEndPoints";
import ApiCliant from "../../api/axiosConfig";
import {
  RolesEditPayloadDataType,
  RolesPayloadDataType,
} from "../../types/Role/RoleTypes";

export default {
  fetchRolesData: async () => {
    const response = await ApiCliant.get(ROLE_API_ENDPOINTS.GET);
    return response;
  },
  updateRoleById: async (id: string, payload: RolesEditPayloadDataType) => {
    const response = await ApiCliant.put(
      `${ROLE_API_ENDPOINTS.PUT}/${id}`,
      payload
    );
    return response;
  },
  deleteRoleById: async (id: string) => {
    const response = await ApiCliant.delete(
      `${ROLE_API_ENDPOINTS.DELETE}/${id}`
    );
    return response;
  },
  createRole: async (payload: RolesPayloadDataType) => {
    const response = await ApiCliant.post(ROLE_API_ENDPOINTS.POST, payload);
    return response;
  },
};
