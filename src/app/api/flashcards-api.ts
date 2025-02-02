import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { DecksListResponse, GetDecksArgs } from "../../pages/decks/Decks.types";
const BASE_URL = process.env.REACT_APP_API_URL;

export const flashcardsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.flashcards.andrii.es",
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.append("x-auth-skip", "true");
    },
  }),
  endpoints: (builder) => {
    return {
      getDecks: builder.query<DecksListResponse, GetDecksArgs | void>({
        query: (args) => ({
          params: args ?? undefined,
          url: `v2/decks?`,
        }),
      }),
    };
  },
  reducerPath: "flashcardsApi",
});

export const { useGetDecksQuery } = flashcardsApi;
