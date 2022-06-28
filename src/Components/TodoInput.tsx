import React from "react";
import styles from "../Todo.module.css";

interface Props {
    readonly input: string;
    readonly onInsert: (input: string) => void;
    readonly onChangeInput: (input: string) => void;
}

const TodoInput = ({ input, onInsert, onChangeInput }: Props) => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.length === 0) return alert("메시지를 입력해주세요.");
        onInsert(input);
        onChangeInput("");
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e.target.value);

    return (
        <div className={styles.input}>
            <form onSubmit={onSubmit}>
                <input placeholder="할 일을 입력하세요" value={input} onChange={onChange} />
                <button type="submit">+</button>
            </form>
        </div>
    );
};

export default TodoInput;
