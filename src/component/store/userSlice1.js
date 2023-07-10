import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const userSlice1 = createSlice({
  name: "data",
  initialState,
  reducers: {
    allField: (state, action) => {
      state.data.push(...action.payload);
    },
    removeField: (state, action) => {
      state.data.splice(action.payload, 1);
    },
  },
});

export const { allField, removeField } = userSlice1.actions;

export const selectUser = (state) => state.user;

export default userSlice1.reducer;
