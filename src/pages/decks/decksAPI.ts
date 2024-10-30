import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  Deck,
  DecksListResponse,
  GetDeckById,
  GetDeckCards,
  MinMaxCardsInDeck,
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
    getDecksMinMax: builder.query<MinMaxCardsInDeck, void>({
      query: () => ({
        url: "/v2/decks/min-max-cards",
      }),
    }),
  }),
  reducerPath: "decksApi",
  tagTypes: ["Deck", "Cards"],
});

export const {
  useGetDeckByIdQuery,
  useGetDeckCardsQuery,
  useGetDecksMinMaxQuery,
} = decksApi;
