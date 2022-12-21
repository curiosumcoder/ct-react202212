import { createSlice } from '@reduxjs/toolkit';
import IProduct from '../model/product/IProduct';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: Array<IProduct>(),
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload as IProduct;
      // Sino existe el producto lo agrega
      if (state.items.findIndex((p: IProduct) => p.id == newItem.id) === -1) {
        state.items = [action.payload, ...state.items];
      }
    },
    incrementQuantity: (state, action) => {
      const currentItem = action.payload as IProduct;
      const item = state.items.find((item) => item.id === currentItem.id);
      if (item) {
        if (item.quantity) {
          ++item.quantity;
        } else {
          item.quantity = 2;
        }
      }
    },
    decrementQuantity: (state, action) => {
      const currentItem = action.payload as IProduct;
      const item = state.items.find((item) => item.id === currentItem.id);
      if (item) {
        if (item.quantity === 1) {
          const index = state.items.findIndex(
            (item) => item.id === currentItem.id
          );
          state.items.splice(index, 1);
        } else {
          item.quantity--;
        }
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (p: IProduct) => p.id !== (action.payload as IProduct).id
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export default cartSlice;
