import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos, changeFilter, editTodo } from "../modules/todos";
import Todos from "../Components/Todos";
import { TodoState } from "../modules/todos";
import { getFilterTodos } from "../modules/selectors";

const TodosContainer = () => {
    const { input, filter, filteredTodos } = useSelector((state: TodoState) => ({
        input: state.input,
        filter: state.filter,
        filteredTodos: getFilterTodos(state),
    }));
    const dispatch = useDispatch();

    const onChangeInput = useCallback((input: string) => dispatch(changeTodoInput(input)), [dispatch]);
    const onInsert = useCallback((input: string) => dispatch(addTodo(input)), [dispatch]);
    const onToggle = useCallback((id: number) => dispatch(toggleTodoStatus(id)), [dispatch]);
    const onRemove = useCallback((id: number) => dispatch(removeTodo(id)), [dispatch]);
    const onClearAll = useCallback(() => dispatch(clearAllTodos()), [dispatch]);
    const onChangeFilter = useCallback((filter: string) => dispatch(changeFilter(filter)), [dispatch]);
    const onEdit = useCallback((id: number, input: string) => dispatch(editTodo(id, input)), [dispatch]);

    return (
        <Todos
            input={input}
            todos={filteredTodos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
            onClearAll={onClearAll}
            onChangeFilter={onChangeFilter}
            filter={filter}
            onEdit={onEdit}
        />
    );
};

export default TodosContainer;
