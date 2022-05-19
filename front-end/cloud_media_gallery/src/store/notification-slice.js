import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { notifications: [] },
  reducers: {
    add(state, action) {
      const noti = {
        title: action.payload.title,
        description: action.payload.description,
        type: action.payload.type,
      };

      state.notifications.push(noti);
    },

    remove(state) {
      if (state.notifications.length > 0) {
        state.notifications.shift();
      }
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
