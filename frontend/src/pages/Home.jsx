import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { clearUser } from '../features/user'; // Adjust the import path based on your project structure
import { useNavigate } from 'react-router-dom';
import StudentNavigationBar from '../components/StudentNavBar';

function Home() {
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(clearUser()); // Dispatch the logout action
    };

    return (
        <div>
            <StudentNavigationBar />
            <h1>Hi {user ? user.name : 'Guest'}!</h1>
            <Button variant="contained" color="primary" onClick={handleLogout}>
                Logout
            </Button>
            <Button variant="contained" color="primary" onClick={() => { navigate('/courses') }}>
                Courses
            </Button>
        </div>
    );
}

export default Home;
