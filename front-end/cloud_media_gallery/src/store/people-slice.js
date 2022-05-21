import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
  },
  reducers: {
    fill(state, action) {
      state.people = [...action.payload.people];
    },

    empty(state) {
      state.people.splice(0, state.length);
    },
  },
});

export const peopleActions = peopleSlice.actions;

export default peopleSlice;
