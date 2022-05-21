import { configureStore } from "@reduxjs/toolkit";
import albumsSlice from "./albums-slice";
import authSlice from "./auth-slice";
import homeSlice from "./home-slice";
import httpStateSlice from "./httpState-slice";
import notificationSlice from "./notification-slice";
import peopleSlice from "./people-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    httpState: httpStateSlice.reducer,
    notification: notificationSlice.reducer,
    people: peopleSlice.reducer,
    albums: albumsSlice.reducer,
    home: homeSlice.reducer,
  },
});

export default store;
