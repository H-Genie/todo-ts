import React from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { Todo } from "../App";
import TodoFilter from "./TodoFilter";

interface Props {
    readonly input: string;
    readonly todos?: Todo[];
    readonly onRemove: (id: number) => void;
    readonly onToggle: (id: number) => void;
    readonly onClearAll: () => void;
    readonly onInsert: (input: string) => void;
    readonly onChangeInput: (input: string) => void;
    readonly filter: string;
    readonly onChangeFilter: (filter: string) => void;
    readonly onEdit: (id: number, input: string) => void;
}

const Todos = ({ input, todos, onRemove, onToggle, onClearAll, onInsert, onChangeInput, filter, onChangeFilter, onEdit }: Props) => {
    return (
        <div>
            <TodoHeader />
            <TodoInput input={input} onInsert={onInsert} onChangeInput={onChangeInput} />
            <TodoFilter filter={filter} onChangeFilter={onChangeFilter} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit} />
            <TodoFooter onClearAll={onClearAll} />
        </div>
    );
};

export default Todos;
