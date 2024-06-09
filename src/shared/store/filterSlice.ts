import { createSlice } from "@reduxjs/toolkit";

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
    setGenre(state, action) {
      state.genre = action.payload;
    },

    setType(state, action) {
      state.type = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setYears(state, action) {
      state.years = action.payload;
    },
    setAgeRestriction(state, action) {
      state.ageRestriction = action.payload;
    },
  },
});
export const { setGenre, setType, setStatus, setYears, setAgeRestriction } =
  FilterSlice.actions;
export default FilterSlice.reducer;
