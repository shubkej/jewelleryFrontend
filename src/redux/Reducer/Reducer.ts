import { combineReducers, Reducer as ReduxReducer } from '@reduxjs/toolkit';
import authSlice from '../Features/Auth/AuthSlice';
import cartSlice from '../Features/Cart/CartSlice';
import productSlice from '../Features/Product/ProductSlice';
import productDetailSlice from '../Features/Product/ProductDetailSlice';
import RecommendedProductSlice from '../Features/Product/RecommendedProductSlice';
import SimilarProductSlice from '../Features/Product/SimilarProductSlice';

export const rootReducer: ReduxReducer = combineReducers({
  auth: authSlice,
  cart: cartSlice,
  product: productSlice,
  productDetails: productDetailSlice,
  recommendedProduct: RecommendedProductSlice,
  similarProduct: SimilarProductSlice,
}) as ReduxReducer;
