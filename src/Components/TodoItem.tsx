import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEditingId, resetEditing } from "../actions/todos";
import { TodoState } from "../reducers/todos";
import styles from "../Todo.module.css";
import { Todo } from "../App";

interface Props {
    readonly todo: Todo;
    readonly onRemove: (id: number) => void;
    readonly onToggle: (id: number) => void;
    readonly onEdit: (id: number, input: string) => void;
}

const TodoItem = ({ todo, onRemove, onToggle, onEdit }: Props) => {
    const { id, text, done } = todo;
    const { editingId } = useSelector((state: TodoState) => ({ editingId: state.editingId }));
    const editInput: React.RefObject<HTMLInputElement> = React.createRef();
    const showInput = id === editingId;
    const [inputText, setInputText] = useState("");

    const dispatch = useDispatch();
    const onSetEditingId = useCallback((id: number) => dispatch(setEditingId(id)), [dispatch]);
    const onResetEditingId = useCallback(() => dispatch(resetEditing()), [dispatch]);

    const onDoubleClick = () => {
        setInputText(text);
        onSetEditingId(id);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onEdit(id, inputText);
            onResetEditingId();
        }
    };
    const handleBlur = () => onResetEditingId();

    useEffect(() => {
        if (todo) setInputText(todo.text);
    }, [todo]);

    useEffect(() => {
        if (editInput.current) editInput.current.focus();
    }, [editInput]);

    return (
        <div className={styles.item}>
            <input type="checkbox" checked={done} onChange={() => onToggle(id)} />
            {showInput && <input value={inputText} onChange={onChange} onKeyPress={handleKeyPress} onBlur={handleBlur} ref={editInput} />}
            {!showInput && <span onDoubleClick={onDoubleClick}>{text}</span>}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
};

export default TodoItem;
