import { get, update } from "@reshuffle/db";
import { getCurrentUser } from '@reshuffle/server-function';

/* @expose */
export async function addNewTodo(todo = {}) {
  const { id } = getCurrentUser(true);
  // what you will return here will be directly updated in backend and returned in frontend
  return update(`/todos/${id}`, (todos = []) => todos.concat(todo));
}

/* @expose */
export async function getTodoList() {
  const { id } = getCurrentUser(true);
  // get all todolist
  return get(`/todos/${id}`);
}

/**
 * Delete a specific todo item
 */
/* @expose */
export async function deleteTodoById(todoId) {
  const { id } = getCurrentUser(true);
  // what you will return here will be directly updated in backend and returned in frontend
  return update(`/todos/${id}`, (todos = []) => todos.filter((todo) => todo.id !== todoId));
}
