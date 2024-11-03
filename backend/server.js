const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const ENV_VARS = require('./config/envVars');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
const PORT = ENV_VARS.PORT;

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies to be sent with requests
};

app.use(cors(corsOptions)); // Use CORS middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
