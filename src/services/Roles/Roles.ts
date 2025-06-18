import { doFetch, REQUEST_METHODS } from "../fetcher";
import ROLE_API_ENDPOINTS from "./RoleApiEndPoints";

export default {
  fetchRolesData: () => doFetch(ROLE_API_ENDPOINTS.GET, REQUEST_METHODS.GET),
  deleteRoleById: (id: string) =>
    doFetch(`${ROLE_API_ENDPOINTS.DELETE}/${id}`, REQUEST_METHODS.DELETE),
  updateRoleById: (payload: any) => {
    const { formData, id } = payload;
    return doFetch(
      `${ROLE_API_ENDPOINTS.PUT}/${id}`,
      REQUEST_METHODS.PUT,
      formData
    );
  },
  createRole: (payload: any) =>
    doFetch(ROLE_API_ENDPOINTS.POST, REQUEST_METHODS.POST, payload),
};
