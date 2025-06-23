import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}
interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<CartItem>) => {
      debugger;
      const existingItem = state.items?.find(
        (item) => item?.id === actions?.payload?.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items?.push(actions?.payload);
      }
    },
    removeItem: (state, actions: PayloadAction<any>) => {
      debugger;
      state.items = state.items?.filter(
        (item) => item?.id !== actions?.payload,
      );
    },
    updateItem: (state, actions: PayloadAction<any>) => {
      const newUpdate = state.items?.map((item) =>
        item?.id === actions.payload?.id
          ? { ...item, quantity: actions.payload?.quantity }
          : item,
      );
      state.items = newUpdate;
    },
  },
});

export const totalItemCount = (state: { cart: CartState }) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const totalPriceCount = (state: { cart: CartState }) => {
  return state.cart.items?.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
};

export const { addToCart, removeItem, updateItem } = CartSlice.actions;
export default CartSlice.reducer;
