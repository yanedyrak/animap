import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
  name: "filter",
  initialState: {
    genre: "",
    type: "",
    status: "",
    years: "",
    ageRestriction: "",
  },
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },

    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setYears: (state, action: PayloadAction<string>) => {
      state.years = action.payload;
    },
    setAgeRestriction: (state, action: PayloadAction<string>) => {
      state.ageRestriction = action.payload;
    },
  },
});
export const { setGenre, setType, setStatus, setYears, setAgeRestriction } =
  FilterSlice.actions;
export default FilterSlice.reducer;
