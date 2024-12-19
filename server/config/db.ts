import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI
  if (!mongoURI) {
    console.error('MONGO_URI is not defined in the environment variables')
    process.exit(1)
  }

  try {
    await mongoose.connect(mongoURI)
    console.log('MongoDB connected')
  } catch (error: any) {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  }
}

export default connectDB
