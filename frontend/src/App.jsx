import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import LoginForm from "./pages/Auth/Login";
import { useDispatch, useSelector } from 'react-redux';
import SignUp from './pages/Auth/SignUp';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { apiCheckAuth } from './api/auth/auth';
import { setUser } from './features/user';
import { loginFailure } from './features/authSlice';
import CoursesList from './pages/Courses/CoursesList';

function App() {
  const user = useSelector((state) => state.user.user); // Access user data correctly
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Move this inside the component where Router is defined

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await apiCheckAuth();
        const token = userData.token;
        if (!token) {
          navigate("/login");
          return;
        }
        if (userData) {
          console.log('User data:', userData);
          const token = userData.token;
          if (!token) {
            navigate("/login");
            return;
          }
          dispatch(setUser(userData.user));

        } else {
          dispatch(loginFailure('Auth check failed')); // Handle auth failure
          navigate("/login"); // Navigate to login if auth check fails
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        dispatch(loginFailure(error.response?.data?.message || 'Auth check failed'));
        navigate("/login"); // Navigate to login if there's an error
      }
    };

    checkAuth(); // Call the function to check authentication
  }, [dispatch, navigate]);


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/courses" element={<CoursesList />} />

    </Routes>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
