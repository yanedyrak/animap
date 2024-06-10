import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const daySlice = createSlice({
  name: "day",
  initialState: {
    value: "Thursday",
  },
  reducers: {
    setDay(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});
export const { setDay } = daySlice.actions;
export default daySlice.reducer;
