import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  // state
  products: []
}

// action
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  /*
  fakestoreapi
  */
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products
})
// const userSlice = createSlice({

export const { reducer, actions } = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  },
})