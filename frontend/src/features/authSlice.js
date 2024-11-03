// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false, // Indicates if the user is authenticated
    loading: false,         // Loading state for async operations
    error: null,           // Error message if any
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state) => {
            state.loading = false;
            state.isAuthenticated = true; // User is now authenticated
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload; // Set error message
        },
        logout: (state) => {
            state.isAuthenticated = false; // Reset authenticated state
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
