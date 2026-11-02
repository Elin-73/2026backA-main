const mongoose = require('mongoose')

const connectDB = async () => {
    if (!process.env.MONGO_DB) {
        throw new Error('MONGO_DB is required. Add your MongoDB connection string to .env.')
    }

    try {
        const conn = await mongoose.connect(process.env.MONGO_DB)
        console.log(`Mongo DB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        throw new Error(`MongoDB connection failed: ${error.message}`, {cause: error})
    }
}

module.exports = connectDB
