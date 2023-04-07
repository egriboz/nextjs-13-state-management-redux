import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userData: {}
}

// const userSlice = createSlice({

export const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // extraReducers: {},
})