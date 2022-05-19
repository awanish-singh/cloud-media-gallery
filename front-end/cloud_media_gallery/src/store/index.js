import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import httpStateSlice from "./httpState-slice";
import notificationSlice from "./notification-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    httpState: httpStateSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

export default store;
