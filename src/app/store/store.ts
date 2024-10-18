import { configureStore } from '@reduxjs/toolkit'
import {flashcardsApi} from "../api/flashcards-api";
import {authAPI} from "@/app/api/auth/auth";
import {loadingReducer} from "@/utils/features/loading/model/slice";
import {authSlice} from "@/app/api/auth/authSlice";

export const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        [authAPI.reducerPath]: authAPI.reducer,
        loading: loadingReducer,
        [flashcardsApi.reducerPath]: flashcardsApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(flashcardsApi.middleware, authAPI.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>