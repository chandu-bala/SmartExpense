require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");
const expenseRoutes = require("./src/routes/expenseRoutes");
const errorMiddleware = require("./src/middleware/errorMiddleware");

const app = express();

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(express.json());

// CORS (Allow frontend only)
app.use(
  cors({
    origin: process.env.CLIENT_URL, // e.g. http://localhost:5173
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/expenses", expenseRoutes);

// Error Middleware
app.use(errorMiddleware);

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
