import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-hot-toast";

const instance = axios.create();
const baseUrl = import.meta.env.VITE_REACT_LOCAL_API_URL || "http://localhost:4500/api"; 

instance.interceptors.response.use(
  (res: any) => res,
  (error: any) => {
    console.log("error", error);
    if (error?.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.reload();
      throw error;
    }
    if (
      typeof error?.config?.headers?.showToast === "boolean" &&
      !error?.config?.headers?.showToast
    )
      throw error;
    if (error?.response?.status >= 400 && error?.config?.method !== "get") {
      if (typeof error?.response?.data.message === "string") {
        toast.error(error?.response?.data.message);
      } else if (typeof error?.response?.data === "string") {
        toast.error(error?.response?.data);
      } else if (typeof error?.response?.data?.response === "string") {
        toast.error(error?.response?.data?.response);
      } else if (error?.response?.status === 429) {
        toast.error("Request limit is exceeded");
      } else {
        toast.error("Server error: ");
      }
    }

    if (error.message === "Network Error") {
      toast.error(error.message);
    }
    throw error;
  }
);

export const REQUEST_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const REQUEST_CONTENT_TYPE = {
  JSON: "application/json",
  MULTIPART: "multipart/form-data",
};

export const doFetch = (
  url: string,
  method: string = REQUEST_METHODS.GET,
  body: any = {},
  otherOptions?: {
    contentType?: string;
    showToast?: boolean;
  } & AxiosRequestConfig
) => {
  const { contentType, signal, showToast, ...others } = otherOptions ?? {};
  const apiUrl = `${baseUrl}${url}`;
  let options = {
    ...others,
    url: apiUrl,
    method,
    headers: {
      "Content-Type": contentType ?? REQUEST_CONTENT_TYPE.JSON,
      "Accept-Language": "en",
    } as any,
  } as any;

  const token = localStorage.getItem("authToken");
  if (token) {
    options.headers.Authorization = token;
  }

  if (showToast !== undefined) {
    options.headers.showToast = showToast;
  }

  // signal to cancel request
  if (signal) {
    options.signal = signal;
  }

  if (contentType?.includes("json")) {
    options.data = JSON.stringify(body);
  } else {
    options.data = body;
  }

  return instance(options);
};
