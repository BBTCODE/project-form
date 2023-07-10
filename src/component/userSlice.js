import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},

  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { updateField } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
