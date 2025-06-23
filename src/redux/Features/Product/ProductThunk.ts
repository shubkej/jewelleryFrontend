import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import Product from '../../../services/Product/Product';

export const getProduct: any = createAsyncThunk(
  'getProduct',
  async (parmas: any) => {
    const response: AxiosResponse = await Product.getProduct(parmas);
    return response.data;
  },
);
export const getProductById: any = createAsyncThunk(
  'getProductById',
  async (id: string) => {
    const response: AxiosResponse = await Product.getProductById(id);
    return response.data;
  },
);
export const getRecommendedProduct: any = createAsyncThunk(
  'getRecommendedProduct',
  async (id: string) => {
    const response: AxiosResponse = await Product.getRecommendedProduct(id);
    return response.data;
  },
);
export const getSimilarProduct: any = createAsyncThunk(
  'getSimilarProduct',
  async (id: string) => {
    const response: AxiosResponse = await Product.getSimilarProduct(id);
    return response.data;
  },
);
