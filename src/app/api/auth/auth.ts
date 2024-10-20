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
  tagTypes: ['me'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.append('x-auth-skip', 'true');
    },
  }),
  endpoints: (builder) => ({
    getMe: builder.query<UserResponse | null | { success: boolean }, void>({
      async queryFn(_name, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          url: `v1/auth/me`,
          method: 'GET',
        });

        console.log(result)

        if (result.error) {
          return {
            data: { success: false, result: result.error },
          };
        }

        return { data: result.data } as { data: UserResponse };
      },
      keepUnusedDataFor: 0,
      extraOptions: {
        maxRetries: 0,
      },
      providesTags: ['me'],
    }),

    login: builder.mutation<{ accessToken: string }, { email: string; password: string; rememberMe: boolean }>({
      query: (data) => ({
        url: `v1/auth/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['me'],

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
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'v1/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['me'],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
} = authAPI;
