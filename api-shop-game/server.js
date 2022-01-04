import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Cors from 'cors';
import bodyParser from "body-parser"


import gameRoutes from "./routes/gameRoutes.js";
import collectionRoutes from './routes/collectionRoutes.js'

dotenv.config();

// Kết nối đến server
connectDB();

const app = express();

app.use(express.json())

app.use(bodyParser.json())

app.use(Cors());

// cái này để test server lúc đầu thôi
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Dùng route ở đây
app.use("/api/games", gameRoutes)
app.use("/api/collections", collectionRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
