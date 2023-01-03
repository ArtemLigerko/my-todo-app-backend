import mongoose from "mongoose";

const Todo = new mongoose.Schema({
  //   userID: { type: String, required: true },
  //   username: { type: String, required: true },
  text: { type: String, required: true },
  //   createdAt: { type: String, required: true },
  //   updatededAt: { type: String, required: true },
  //   completed: { type: Boolean, required: true },
  //   edit: { type: Boolean },
  //   disableButtons: { type: Boolean },
  //   colorId: { type: Number },
});

export default mongoose.model("Todo", Todo);
