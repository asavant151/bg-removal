import 'dotenv/config';
import express from "express";
import cors from "cors";
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';

// App Config
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  const app = express();
  try {
    await connectDB();

    // Initialize Middlewares
    app.use(express.json());
    app.use(cors());

    // App routes
    app.get('/', (req, res) => res.send("API Working"));
    app.use('/api/user', userRouter);

    app.listen(PORT, () => console.log("Server Running on port " + PORT));
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit the process if the server fails to start
  }
};

startServer();
