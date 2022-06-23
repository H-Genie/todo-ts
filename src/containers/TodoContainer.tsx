import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos } from "../modules/todos";
import Todos from "../Components/Todos";
import { TodoState } from "../modules/todos";

const TodosContainer = () => {
    const { input, todos } = useSelector((state: TodoState) => ({
        input: state.input,
        todos: state.todos,
    }));
    const dispatch = useDispatch();

    const onChangeInput = useCallback((input: string) => dispatch(changeTodoInput(input)), [dispatch]);
    const onInsert = useCallback((input: string) => dispatch(addTodo(input)), [dispatch]);
    const onToggle = useCallback((id: number) => dispatch(toggleTodoStatus(id)), [dispatch]);
    const onRemove = useCallback((id: number) => dispatch(removeTodo(id)), [dispatch]);
    const onClearAll = useCallback(() => dispatch(clearAllTodos()), [dispatch]);

    return <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove} onClearAll={onClearAll} />;
};

export default TodosContainer;
