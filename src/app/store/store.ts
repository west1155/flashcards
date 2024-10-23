import { authAPI } from "@/app/api/auth/auth";
import { decksApi } from "@/pages/decks/decksAPI";
import { configureStore } from "@reduxjs/toolkit";

import { flashcardsApi } from "../api/flashcards-api";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      flashcardsApi.middleware,
      authAPI.middleware,
      decksApi.middleware,
    ),
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [decksApi.reducerPath]: decksApi.reducer,
    [flashcardsApi.reducerPath]: flashcardsApi.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

declare global {
  interface Window {
    store: typeof store;
  }
}

window.store = store;
