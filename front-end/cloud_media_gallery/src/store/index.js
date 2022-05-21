import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import httpStateSlice from "./httpState-slice";
import notificationSlice from "./notification-slice";
import peopleSlice from "./people-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    httpState: httpStateSlice.reducer,
    notification: notificationSlice.reducer,
    people: peopleSlice.reducer,
  },
});

export default store;
