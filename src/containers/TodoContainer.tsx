import React from "react";
import { connect } from "react-redux";
import { changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos } from "../modules/todos";
import Todos from "../Components/Todos";
import { TodoState } from "../modules/todos";
import { Todo } from "../App";

interface Props {
    readonly input: string;
    readonly todos: Todo[];
    readonly removeTodo: (id: number) => void;
    readonly toggleTodoStatus: (id: number) => void;
    readonly clearAllTodos: () => void;
    readonly addTodo: (input: string) => void;
    readonly changeTodoInput: (input: string) => void;
}

const TodosContainer = ({ input, todos, changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos }: Props) => {
    return <Todos input={input} todos={todos} onChangeInput={changeTodoInput} onInsert={addTodo} onToggle={toggleTodoStatus} onRemove={removeTodo} onClearAll={clearAllTodos} />;
};

export default connect(
    (state: TodoState) => ({
        input: state.input,
        todos: state.todos,
    }),
    (dispatch) => ({
        changeTodoInput: (input: string) => dispatch(changeTodoInput(input)),
        addTodo: (input: string) => dispatch(addTodo(input)),
        toggleTodoStatus: (id: number) => dispatch(toggleTodoStatus(id)),
        removeTodo: (id: number) => dispatch(removeTodo(id)),
        clearAllTodos: () => dispatch(clearAllTodos()),
    })
)(TodosContainer);
