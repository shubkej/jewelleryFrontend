import { doFetch, REQUEST_METHODS } from "../fetcher";
import DYNAMIC_FORM_API_ENDPOINTS from "./DynamicFormApiEndPoints";

export default {
  createFeedbackForm: (payload: any) =>
    doFetch(DYNAMIC_FORM_API_ENDPOINTS.POST, REQUEST_METHODS.POST, payload),
  fetchFeedbackById: (id: string) =>
    doFetch(
      `${DYNAMIC_FORM_API_ENDPOINTS.GET_BY_ID}/${id}`,
      REQUEST_METHODS.GET
    ),
};
