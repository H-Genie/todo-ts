import { Todo } from "../App";
import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";

const CHANGE_TODO_INPUT = "CHANGE_TODO_INPUT";
const ADD_TO_DO = "ADD_TO_DO";
const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";
const REMOVE_TODO = "REMOVE_TODO";
const CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS";

export const changeTodoInput = createAction(CHANGE_TODO_INPUT, (input: string) => input);
export const addTodo = createAction(ADD_TO_DO, (input: string) => ({
    text: input,
    done: false,
}));
export const toggleTodoStatus = createAction(TOGGLE_TODO_STATUS, (id: number) => id);
export const removeTodo = createAction(REMOVE_TODO, (id: number) => id);
export const clearAllTodos = createAction(CLEAR_ALL_TODOS);

export interface TodoState {
    input: string;
    todos: Todo[];
    nextTodoId: number;
}

const initialState: TodoState = {
    input: "",
    todos: [],
    nextTodoId: 1,
};

const todos = createReducer(initialState, {
    [CHANGE_TODO_INPUT]: (state, { payload: input }) => ({
        ...state,
        input,
    }),
    [ADD_TO_DO]: (state, { payload: todo }) => {
        const newTodo = { ...todo, id: state.nextTodoId };
        const nextTodoId = state.nextTodoId + 1;

        return {
            ...state,
            todos: state.todos.concat(newTodo),
            nextTodoId,
        };
    },
    [TOGGLE_TODO_STATUS]: (state, { payload: id }) => ({
        ...state,
        todos: state.todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    }),
    [REMOVE_TODO]: (state, { payload: id }) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [CLEAR_ALL_TODOS]: (state, action) => ({
        ...state,
        todos: [],
    }),
});

export default todos;
