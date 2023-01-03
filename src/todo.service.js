import Todo from "./todo.model.js";

export const createOne = async (todo) => {
  const createdTodo = await Todo.create(todo);
  return createdTodo;
};

export const getAll = async () => {
  const todos = await Todo.find();
  return todos;
};

export const getOne = async (id) => {
  if (!id) {
    throw new Error("Id not found");
  }
  const todo = await Todo.findById(id);
  return todo;
};

export const updateOne = async (todo) => {
  if (!todo._id) {
    throw new Error("Id not found");
  }
  const updatedTodo = await Todo.findByIdAndUpdate(todo._id, todo, {
    new: true,
  });
  return updatedTodo;
};

export const deleteOne = async (id) => {
  if (!id) {
    throw new Error("Id not found!");
  }
  const deletedTodo = await Todo.findByIdAndDelete(id);
  return deletedTodo;
};
