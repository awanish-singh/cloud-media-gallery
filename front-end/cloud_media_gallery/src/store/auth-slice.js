import { createSlice } from "@reduxjs/toolkit";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      token: token,
      isLoggedIn: true,
      userName: localStorage.getItem("userName"),
      fullName: localStorage.getItem("fullName"),
      email: localStorage.getItem("email"),
    };
  }

  return {
    token: "",
    isLoggedIn: false,
    userName: "",
    fullName: "",
    email: "",
  };
};

const storeAuth = (authDetails) => {
  localStorage.setItem("token", authDetails.token);
  localStorage.setItem("userName", authDetails.userName);
  localStorage.setItem("fullName", authDetails.fullName);
  localStorage.setItem("email", authDetails.email);
};

const clearStorage = () => {
  localStorage.clear();
};

const authSlice = createSlice({
  name: "Auth",
  initialState: checkAuth(),
  reducers: {
    login(state, action) {
      storeAuth(action.payload);
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
    },

    logout(state) {
      clearStorage();
      state.token = null;
      state.isLoggedIn = false;
      state.userName = null;
      state.fullName = null;
      state.email = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
