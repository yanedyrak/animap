import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../../shared/api/urlValues";
export const trendingApi = createApi({
  reducerPath: "trendingApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getTrending: build.query({
      query: () => "/title/list?id_list=9021,9061,9022,9024,9014",
    }),
  }),
});
export const { useGetTrendingQuery } = trendingApi;
