import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  // state
  user: {}
}

// action
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  return Promise.resolve({ id: 1, name: "John Deo" })
  /*
  randomuser
  */
  // const response = await fetch("https://randomuser.me/api/");
  // const user = await response.json();
  // return user.results[0].name.first
})
// const userSlice = createSlice({

export const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  },
})