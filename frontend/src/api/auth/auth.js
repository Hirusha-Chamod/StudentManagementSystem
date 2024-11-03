import axios from 'axios';
import { setUser } from '../../features/user';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../features/authSlice';


const API_URL = 'http://localhost:5000/api'; // Backend URL



export const loginUser = (email, password) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password }, { withCredentials: true });
        dispatch(setUser(response.data)); // Set user data in user slice
        dispatch(loginSuccess()); // Update auth slice to indicate success
        console.log('Login successful:', response.data.user);
    } catch (error) {
        dispatch(loginFailure(error.response?.data?.message || 'Login failed'));
    }
};

export const signUpUser = async (email, password, name, role) => {
    try {
        const dispatch = useDispatch();
        const response = await axios.post(`${API_URL}/auth/signup`, {
            email,
            password,
            name,
            role,
        }, { withCredentials: true });

        console.log('Signup successful:', response.data);
        dispatch(setUser(response.data));
    } catch (error) {
        console.error('Signup failed:', error);

        throw error.response ? error.response.data : new Error('Network error');
    }
};

export const apiCheckAuth = async () => {
    const response = await axios.get(`${API_URL}/auth/authCheck`, { withCredentials: true });
    return response.data; // Return only the user object
};

