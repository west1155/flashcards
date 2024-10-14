import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the UserResponse type that matches the expected API response
export type UserResponse = {
  avatar: string;
  id: string;
  email: string;
  isEmailVerified: boolean;
  name: string;
  created: string;
  updated: string;
};

// Define the API slice using createApi
export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    prepareHeaders: (headers) => {
      // You can add authentication tokens here if required
      //const token = (getState()).auth.token;
      // if (token) {
      //   headers.set('Authorization', `Bearer ${token}`);
      // }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define the 'getMe' endpoint that will handle the GET /v1/auth/me request
    getMe: builder.query<UserResponse, void>({
      query: () => '/v1/auth/me',
      // Custom error handling, transforming the response if necessary
      transformResponse: (response: UserResponse, meta) => {
        if (meta?.response?.status === 400) {
          throw new Error('Bad request. Please check your input.');
        }
        if (meta?.response?.status === 401) {
          throw new Error('Unauthorized. Please log in.');
        }
        return response;
      },
    }),
    login: builder.mutation<UserResponse, { email: string; password: string }>({
      query: (body) => ({
        url: '/v1/auth/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetMeQuery,
  useLoginMutation,
} = authAPI;
