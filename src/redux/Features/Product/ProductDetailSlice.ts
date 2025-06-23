import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductById } from './ProductThunk';
 

interface ProductState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  data: any | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: ProductState = {
  status: 'idle',
  data: null,
  error: null,
  isLoading: false,
};

interface ProductResponsePayload {
  data: {};
}

const productDetails = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
        state.error = null;
        state.data = null;
      })
      .addCase(
        getProductById.fulfilled,
        (state, action: PayloadAction<ProductResponsePayload>) => {
          state.isLoading = false;
          state.status = 'succeeded';
          state.data = action.payload.data || {};
        },
      )
      .addCase(getProductById.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch products';
      });
  },
});

export default productDetails.reducer;
