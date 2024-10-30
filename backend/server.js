const connectDB = require('./config/db');
const ENV_VARS = require('./config/envVars')
const express = require('express')
const authRoutes = require('./routes/authRoutes')

const app = express();
const PORT = ENV_VARS.PORT

app.use(express.json())

app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})