import { createSlice } from "@reduxjs/toolkit";

const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
  },
  reducers: {
    fill(state, action) {
      state.albums = [...action.payload.albums];
    },

    empty(state) {
      state.albums.splice(0, state.albums.length);
    },

    add(state, action) {
      state.albums.unshift(action.payload.album);
    },

    remove(state, action) {
      const albumIndex = state.albums.findIndex(
        (album) => album.id === action.payload.id
      );
      state.albums.splice(albumIndex, 1);
    },
  },
});

export const albumsActions = albumsSlice.actions;

export default albumsSlice;
