import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSimilarProduct } from './ProductThunk';

interface ProductState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  similarProduct: any[] | null;
  error: string | null;
  loader: boolean;
}

const initialState: ProductState = {
  status: 'idle',
  similarProduct: null,
  error: null,
  loader: false,
};

interface SimilarProductResponsePayload {
  similarProduct: any[] | null;
}

const RecommendedProductSlice = createSlice({
  name: 'RecommendedProductSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSimilarProduct.pending, (state) => {
        state.loader = true;
        state.status = 'loading';
        state.error = null;
        state.similarProduct = null;
      })
      .addCase(
        getSimilarProduct.fulfilled,
        (state, action: PayloadAction<SimilarProductResponsePayload>) => {
          state.loader = false;
          state.status = 'succeeded';
          state.similarProduct = action.payload?.similarProduct || [];
        },
      )
      .addCase(getSimilarProduct.rejected, (state, action) => {
        state.loader = false;
        state.status = 'failed';
        state.error = action.error?.message || 'Failed to fetch products';
      });
  },
});

export default RecommendedProductSlice.reducer;
