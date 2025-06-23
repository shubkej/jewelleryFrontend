import { AddProductType } from '../../types/Product/ProductTypes';
import PRODUCT_API_ENDPOINTS from '../Product/ProductEndPoints';
import { doFetch, REQUEST_METHODS } from '../fetcher';

export default {
  getProduct: (params: any) =>
    doFetch(
      `${PRODUCT_API_ENDPOINTS.GET_PRODUCT}?page=${params.page}&limit=${params.limit}&category=${params.category}&subCategory=${params.subCategory}&sort=${params.sort || 'price_asc'}`,
      REQUEST_METHODS.GET,
      params,
    ),

  getProductById: (id: string) =>
    doFetch(
      `${PRODUCT_API_ENDPOINTS.GET_PRODUCT_BY_ID}/${id}`,
      REQUEST_METHODS.GET,
    ),
  getRecommendedProduct: (id: string) =>
    doFetch(
      `${PRODUCT_API_ENDPOINTS.GET_RECMMENDED_PRODUCT}/${id}`,
      REQUEST_METHODS.GET,
    ),
  getSimilarProduct: (id: string) =>
    doFetch(
      `${PRODUCT_API_ENDPOINTS.GET_SIMILAR_PRODUCT}/${id}`,
      REQUEST_METHODS.GET,
    ),

  addProduct: (addPayload: AddProductType) =>
    doFetch(
      PRODUCT_API_ENDPOINTS.ADD_PRODUCT,
      REQUEST_METHODS.POST,
      addPayload,
    ),

  updateProduct: (updatePayload: AddProductType) =>
    doFetch(
      PRODUCT_API_ENDPOINTS.UPDATE_PRODUCT,
      REQUEST_METHODS.PUT,
      updatePayload,
    ),
};
