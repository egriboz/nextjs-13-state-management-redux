import { configureStore } from "@reduxjs/toolkit";
// userReducer
import { reducer as userReducer } from "./user-store";

export const store = configureStore({
  reducer: {
    user: userReducer,
  }
})