import { createSlice } from "@reduxjs/toolkit";

const httpStateSlice = createSlice({
  name: "httpState",
  initialState: { isLoading: false, error: null },
  reducers: {
    send(state) {
      // console.log("in it");
      state.isLoading = true;
      state.error = null;
    },

    response(state) {
      state.isLoading = false;
    },

    error(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action.payload);
    },

    clean(state) {
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const httpStateActions = httpStateSlice.actions;

export default httpStateSlice;
