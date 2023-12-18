import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: localStorage.getItem("auth-data") || null,
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.auth = action.payload;
    },
    resetUser: (state) => {
      state.auth = null;
    },
  },
});

export const { authUser, resetUser } = AuthSlice.actions;
const authReducer = AuthSlice.reducer;
export default authReducer;
