import mongoose from "mongoose";

let isConnected; // track the connection status

const connectDB = async () => {
  if (isConnected) {
    console.log('Reusing existing database connection');
    return;
  }

  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    console.log('MongoDB connected:', isConnected);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Ensure any DB connection failure is reported
  }
};

export default connectDB;