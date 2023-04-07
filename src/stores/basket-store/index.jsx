import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  // state
  basket: []
}

export const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload]
    }
  },
})