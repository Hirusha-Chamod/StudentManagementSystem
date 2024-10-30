const ENV_VARS = require('./envVars')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const con = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB