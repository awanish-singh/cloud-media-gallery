import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    sessionId: "",
    isLoggedIn: false,
    userName: "",
    fullName: "",
    email: "",
  },
  reducers: {
    login(state, action) {
      state.sessionId = action.payload.sessionId;
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
    },

    logout(state) {
      state.sessionId = null;
      state.isLoggedIn = false;
      state.userName = null;
      state.fullName = null;
      state.email = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
