import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import userRoutes from "./routes/users.js";
import jobRoutes from "./routes/jobs.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET","POST"] },
});

app.use(cors());
app.use(express.json());

// Attach io to req
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB Error:", err));

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);
  socket.on("disconnect", () => console.log("Client disconnected:", socket.id));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
