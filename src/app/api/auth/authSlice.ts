// authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
    accessToken: string | null;
};

const initialState: AuthState = {
    accessToken: null,
};

export const authSlice = createSlice({
    name: 'authToken',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string | null>) => {
            state.accessToken = action.payload;
        },
        clearAccessToken: (state) => {
            state.accessToken = null;
        },
    },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;

export default authSlice.reducer;