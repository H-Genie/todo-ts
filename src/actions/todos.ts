import { createAction } from "redux-actions";
import { CHANGE_TODO_INPUT, ADD_TO_DO, TOGGLE_TODO_STATUS, REMOVE_TODO, CLEAR_ALL_TODOS, RESTORE, CHANGE_FILTER, EDIT_TODO, SET_EDITING_ID, RESET_EDITING_ID } from "../constants/ActionTypes";

export const changeTodoInput = createAction(CHANGE_TODO_INPUT, (input: string) => input);
export const addTodo = createAction(ADD_TO_DO, (input: string) => ({
    text: input,
    done: false,
}));
export const toggleTodoStatus = createAction(TOGGLE_TODO_STATUS, (id: number) => id);
export const removeTodo = createAction(REMOVE_TODO, (id: number) => id);
export const clearAllTodos = createAction(CLEAR_ALL_TODOS);
export const restore = createAction(RESTORE, (data: string) => data);
export const changeFilter = createAction(CHANGE_FILTER, (filter: string) => filter);
export const editTodo = createAction(EDIT_TODO, (id: number, input: string) => ({ id, input }));
export const setEditingId = createAction(SET_EDITING_ID, (id: number) => id);
export const resetEditing = createAction(RESET_EDITING_ID);
