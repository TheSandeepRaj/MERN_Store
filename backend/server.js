import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

console.log("Connecting to:", process.env.MONGO_URI);
// const uri = process.env.MONGO_URI;

// Routes
app.use("/api/products", productRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

const startServer = async () => {
  await connectDB(); // Ensure the database connection is established before starting the server

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
