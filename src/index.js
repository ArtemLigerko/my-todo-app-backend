import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";

import router from "./todo.routes.js";

dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json("Server working");
});
app.get("/api/todos", (req, res) => {
  res.status(200).json();
});

mongoose.set("strictQuery", true);

const startApp = async () => {
  const db = mongoose.connection;

  try {
    mongoose.connect(DB_URL);

    //mongo db connection succeed check
    db.once("open", (_) => {
      console.log("Database connected:", DB_URL);
    });
    db.on("error", (err) => {
      console.error("connection error:", DB_URL);
    });

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

startApp();
