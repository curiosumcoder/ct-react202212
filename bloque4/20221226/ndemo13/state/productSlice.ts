import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductService from '../services/ProductService';
import IProduct from '../model/product/IProduct';
import axios from 'axios';

export const searchProducts = createAsyncThunk(
  'search-products',
  async (filter: string) => {
    const request = await axios(`/api/product/${filter}`);
    return request.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: Array<IProduct>(),
    fetchStatus: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchStatus = 'success';
      })
      .addCase(searchProducts.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(searchProducts.rejected, (state) => {
        state.fetchStatus = 'error';
      });
  },
});

export default productSlice;
