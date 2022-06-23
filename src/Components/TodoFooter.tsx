import React from "react";
import styles from "../Todo.module.css";

interface Props {
    onClearAll: () => void;
}

const TodoFooter = ({ onClearAll }: Props) => {
    return (
        <div className={styles.footer}>
            <button onClick={onClearAll}>모두 삭제</button>
        </div>
    );
};

export default TodoFooter;
