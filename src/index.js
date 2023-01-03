import express from "express";
import mongoose from "mongoose";
import router from "./todo.routes.js";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5001;
const DB_URL = process.env.MONGO_URL;

const app = express();

app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
  res.status(200).json("Server working");
});

mongoose.set("strictQuery", true);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

startApp();
