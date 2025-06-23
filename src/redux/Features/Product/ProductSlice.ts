import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddProductType } from '../../../types/Product/ProductTypes';
import { getProduct } from './ProductThunk';

interface Pagination {
  totalPages: number;
  totalProducts: number;
  currentPage: number;
  pageSize: number;
}

interface ProductState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  data: AddProductType[] | null;
  pagination: Pagination;
  error: string | null;
  isLoading: boolean;
}

const initialState: ProductState = {
  status: 'idle',
  data: null,
  pagination: {
    totalPages: 0,
    totalProducts: 0,
    currentPage: 1,
    pageSize: 10,
  },
  error: null,
  isLoading: false,
};

interface ProductResponsePayload {
  data: AddProductType[];
  pagination: Pagination;
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        getProduct.fulfilled,
        (state, action: PayloadAction<ProductResponsePayload>) => {
          state.isLoading = false;
          state.status = 'succeeded';
          state.data = action.payload.data || [];
          state.pagination = action.payload.pagination || {
            totalPages: 0,
            totalProducts: 0,
            currentPage: 1,
            pageSize: 10,
          };
        },
      )
      .addCase(getProduct.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch products';
      });
  },
});

export default productSlice.reducer;
