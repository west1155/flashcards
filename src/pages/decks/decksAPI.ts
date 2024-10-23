import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  Deck,
  DecksListResponse,
  GetDeckById,
  GetDeckCards,
} from "./Decks.types";

export const decksApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.flashcards.andrii.es",
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.append("x-auth-skip", "true");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDeckById: builder.query<Omit<Deck, "author">, GetDeckById>({
      providesTags: ["Deck"],
      query: ({ id }) => ({
        url: `v1/decks/${id}`,
      }),
    }),

    getDeckCards: builder.query<DecksListResponse, GetDeckCards>({
      providesTags: ["Cards"],
      query: ({ id, ...params }) => ({
        params: params,
        url: `v1/decks/${id}/cards`,
      }),
    }),
  }),
  tagTypes: ["Cards", "Deck"],
});

export const { useGetDeckByIdQuery, useGetDeckCardsQuery } = decksApi;
