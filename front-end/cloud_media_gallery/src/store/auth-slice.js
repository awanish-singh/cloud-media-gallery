import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: { sessionId: "", isLoggedIn: false, userName: "" },
  reducers: {
    login(state, action) {
      state.sessionId = action.payload.sessionId;
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
    },

    logout(state) {
      state.sessionId = null;
      state.isLoggedIn = false;
      state.userName = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
