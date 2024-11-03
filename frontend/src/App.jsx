import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import LoginForm from "./pages/Auth/Login";
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.value); // Get user from Redux state

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <LoginForm /> : <Navigate to="/" />}
        />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
