import React from "react";
import { connect } from "react-redux";
import { changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos } from "../modules/todos";
import Todos from "../Components/Todos";
import { TodoState } from "../modules/todos";
import { Dispatch } from "redux";

type PropsState = ReturnType<typeof mapStateToProps>;
type PropsDispatch = ReturnType<typeof mapDispatchToProps>;
interface Props extends PropsState, PropsDispatch {}

const TodosContainer = ({ input, todos, changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos }: Props) => {
    return <Todos input={input} todos={todos} onChangeInput={changeTodoInput} onInsert={addTodo} onToggle={toggleTodoStatus} onRemove={removeTodo} onClearAll={clearAllTodos} />;
};

const mapStateToProps = (state: TodoState) => ({
    input: state.input,
    todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeTodoInput: (input: string) => dispatch(changeTodoInput(input)),
    addTodo: (input: string) => dispatch(addTodo(input)),
    toggleTodoStatus: (id: number) => dispatch(toggleTodoStatus(id)),
    removeTodo: (id: number) => dispatch(removeTodo(id)),
    clearAllTodos: () => dispatch(clearAllTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
