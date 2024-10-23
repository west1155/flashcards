import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type UserResponse = {
  avatar: string;
  created: string;
  email: string;
  id: string;
  isEmailVerified: boolean;
  name: string;
  updated: string;
};

export type TokenType = {
  accessToken: string;
  refreshToken: string;
};

// Define the API slice using createApi
export const authAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.flashcards.andrii.es",
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.append("x-auth-skip", "true");
    },
  }),
  endpoints: (builder) => ({
    getMe: builder.query<{ success: boolean } | UserResponse | null, void>({
      extraOptions: {
        maxRetries: 0,
      },
      keepUnusedDataFor: 0,
      providesTags: ["me"],
      async queryFn(_name, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          method: "GET",
          url: `v1/auth/me`,
        });

        if (result.error) {
          return {
            data: { result: result.error, success: false },
          };
        }

        return { data: result.data } as { data: UserResponse };
      },
    }),

    login: builder.mutation<
      { accessToken: string },
      { email: string; password: string; rememberMe: boolean }
    >({
      invalidatesTags: ["me"],
      query: (data) => ({
        body: data,
        method: "POST",
        url: `v1/auth/login`,
      }),
    }),

    logout: builder.mutation<void, void>({
      invalidatesTags: ["me"],
      query: () => ({
        method: "POST",
        url: "v1/auth/logout",
      }),
    }),
    recoverPassword: builder.mutation<void, { email: string }>({
      query: (body) => ({
        body,
        method: "POST",
        url: "/v1/auth/recover-password",
      }),
    }),
    resetPassword: builder.mutation<void, { password: string; token: string }>({
      query: ({ password, token }) => ({
        body: { password },
        method: "POST",
        url: `v1/auth/reset-password/${token}`,
      }),
    }),
    signup: builder.mutation<UserResponse, { email: string; password: string }>(
      {
        query: (body) => ({
          body,
          method: "POST",
          url: "/v1/auth/sign-up",
        }),
      },
    ),
  }),
  reducerPath: "authAPI",
  tagTypes: ["Cards", "me", "Deck"],
});

// Export hooks for usage in functional components
export const {
  useGetMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
  useSignupMutation,
} = authAPI;
