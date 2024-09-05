import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


interface Deck {
    id: string;
    name: string;
    // Add other properties as needed
}

export const flashcardsApi = createApi({
    reducerPath: 'flashcardsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.flashcards.andrii.es',
        credentials: 'include',
        prepareHeaders: headers => {
            headers.append('x-auth-skip', 'true')
        },
    }),
    endpoints: builder => {
        return {
            getDecks: builder.query<Deck[], void>({
                query: () => `v2/decks`,
            }),
        }
    },
})

export const { useGetDecksQuery } = flashcardsApi