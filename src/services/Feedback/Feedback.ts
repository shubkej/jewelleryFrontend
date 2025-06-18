import { doFetch, REQUEST_METHODS } from "../fetcher";
import FEEDBACK_API_ENDPOINTS from "./FeedbackEndPoints";

export default {
  updateRoleById: (payload: any) => {
    const { formData, id } = payload;
    return doFetch(
      `${FEEDBACK_API_ENDPOINTS.PUT}/${id}`,
      REQUEST_METHODS.PUT,
      formData
    );
  },
}
