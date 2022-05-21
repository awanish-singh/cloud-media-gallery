import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    allMedia: [],
  },
  reducers: {
    fill(state, action) {
      state.allMedia = [...action.payload.allMedia];
    },

    empty(state) {
      state.allMedia.splice(0, state.allMedia.length);
    },

    add(state, action) {
      state.allMedia.unshift(action.payload.media);
    },

    remove(state, action) {
      const mediaIndex = state.allMedia.findIndex(
        (media) => media.id === action.payload.id
      );
      state.allMedia.splice(mediaIndex, 1);
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice;
