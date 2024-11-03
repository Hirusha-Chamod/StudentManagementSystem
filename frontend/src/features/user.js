import { createSlice } from '@reduxjs/toolkit';
import { loginUser as apiLoginUser } from '../api/auth/auth';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null,
        loading: false,
        error: null,
    },
    reducers: {
        login: (state, action) => {
            state.loading = false; // Reset loading state
            state.value = action.payload; // Store user data
            state.error = null; // Reset error
        },
        logout: (state) => {
            state.value = null;
        },
        loginStart: (state) => {
            state.loading = true; // Set loading state
            state.error = null; // Reset error
        },
        loginFailure: (state, action) => {
            state.loading = false; // Reset loading state
            state.error = action.payload; // Set error message
        },
    },
});

// Normal login action
export const loginUser = (email, password) => async (dispatch) => {
    dispatch(userSlice.actions.loginStart());
    try {
        const userData = await apiLoginUser(email, password);
        dispatch(userSlice.actions.login(userData)); // Dispatch login action with user data
    } catch (error) {
        dispatch(userSlice.actions.loginFailure(error.response.data.message || 'Login failed')); // Handle error
    }
};

export const { logout } = userSlice.actions;
export default userSlice.reducer;
