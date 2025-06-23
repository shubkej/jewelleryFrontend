import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRecommendedProduct } from './ProductThunk';

interface ProductState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  recommendedProducts: any[] | null;
  error: string | null;
  loading: boolean;
}

const initialState: ProductState = {
  status: 'idle',
  recommendedProducts: null,
  error: null,
  loading: false,
};

interface RecommendedProductResponsePayload {
  recommendedProducts: any[] | null;
}

const RecommendedProductSlice = createSlice({
  name: 'RecommendedProductSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendedProduct.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
        state.error = null;
        state.recommendedProducts = null;
      })
      .addCase(
        getRecommendedProduct.fulfilled,
        (state, action: PayloadAction<RecommendedProductResponsePayload>) => {
          state.loading = false;
          state.status = 'succeeded';
          state.recommendedProducts = action.payload?.recommendedProducts || [];
        },
      )
      .addCase(getRecommendedProduct.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.error?.message || 'Failed to fetch products';
      });
  },
});

export default RecommendedProductSlice.reducer;
