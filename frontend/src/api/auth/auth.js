import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Backend URL

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            email,
            password,
        });

        console.log('Login successful:', response.data);
    } catch (error) {
        console.error('Login failed:', error);

        throw error.response ? error.response.data : new Error('Network error');
    }
};
