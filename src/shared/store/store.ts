import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import { trendingApi } from "../api/trending.api";
import burgerSlice from "./burgerSlice";
import daySlice from "./daySlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    [trendingApi.reducerPath]: trendingApi.reducer,
    filter: filterSlice,
    day: daySlice,
    burger: burgerSlice,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trendingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
