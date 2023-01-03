import Router from "express";
import {
  createOneTodo,
  getAllTodos,
  getOneTodo,
  updateOneTodo,
  deleteOneTodo,
} from "./todo.controller.js";

const router = new Router();

router.post("/todos", createOneTodo);
router.get("/todos", getAllTodos);
router.get("/todos/:id", getOneTodo);
router.put("/todos", updateOneTodo);
router.delete("/todos/:id", deleteOneTodo);

export default router;
