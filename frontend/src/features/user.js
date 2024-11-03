// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null, // Store user data here
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload; // Set user data
        },
        clearUser: (state) => {
            state.user = null; // Clear user data
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
