import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    value: false,
  },
  reducers: {
    setOpen(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
  },
});

export const { setOpen } = burgerSlice.actions;

export default burgerSlice.reducer;
