import { createSelector } from "reselect";
import { TodoState } from "../reducers/todos";

const getTodos = (state: TodoState) => state.todos;
const getFilter = (state: TodoState) => state.filter;

export const getFilterTodos = createSelector([getTodos, getFilter], (todos, filter) => {
    if (filter === "ALL") return todos;
    if (filter === "A") {
        return todos.filter((todo) => {
            return todo.done === false;
        });
    }
    if (filter === "B") {
        return todos.filter((todo) => {
            return todo.done === true;
        });
    }
});
