import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type UserResponse = {
  avatar: string;
  id: string;
  email: string;
  isEmailVerified: boolean;
  name: string;
  created: string;
  updated: string;
};

export type TokenType = {
  accessToken: string;
  refreshToken: string;
};

// Define the API slice using createApi
export const authAPI = createApi({
  reducerPath: 'authAPI',
  tagTypes: ['Me'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true');
    }
  }),
  endpoints: (builder) => ({
    // Define the 'getMe' endpoint that will handle the GET /v1/auth/me request
    getMe: builder.query<UserResponse | null | { success: boolean }, void>({
      async queryFn(_name, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          url: `v1/auth/me`,
          method: 'GET',
        });

        if (result.error) {
          return {
            data: { success: false, result: result.error },
          };
        }

        return { data: result.data } as { data: UserResponse };
      },
      extraOptions: {
        maxRetries: 0,
      },
      providesTags: ['Me'],
    }),

    login: builder.mutation<{ accessToken: string }, { email: string; password: string; rememberMe: boolean }>({
      query: (data) => ({
        url: `v1/auth/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Me'],
    }),

    signup: builder.mutation<UserResponse, { email: string; password: string }>({
      query: (body) => ({
        url: '/v1/auth/sign-up',
        method: 'POST',
        body,
      }),
    }),
    recoverPassword: builder.mutation<void, { email: string }>({
      query: (body) => ({
        url: '/v1/auth/recover-password',
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation<void, { token: string; password: string }>({
      query: ({ token, password }) => ({
        url: `v1/auth/reset-password/${token}`,
        method: 'POST',
        body: { password },
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetMeQuery,
  useLoginMutation,
  useSignupMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
} = authAPI;
