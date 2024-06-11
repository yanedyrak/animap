import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../../shared/api/urlValues";
import { TitleT } from "../types";
export const trendingApi = createApi({
  reducerPath: "trendingApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getTrending: build.query<TitleT[], void>({
      query: () => "/title/list?id_list=9021,9061,9022,9024,9014",
    }),
    getAnnounce: build.query<TitleT[], number>({
      query: (day: number) =>
        `/title/schedule?filter=id,names,announce,player&days=${day}`,
    }),
    getUpdates: build.query<TitleT[], void>({
      query: () => `/title/updates?limit=10`,
    }),
    getTitle: build.query<TitleT, string>({
      query: (id: string) => `/title?id=${id}`,
    }),

    getRandomTitle: build.query<{ id: number }, void>({
      query: () => `/title/random?filter=id`,
    }),
  }),
});
export const {
  useGetTrendingQuery,
  useGetAnnounceQuery,
  useGetUpdatesQuery,
  useGetTitleQuery,
  useGetRandomTitleQuery,
} = trendingApi;
