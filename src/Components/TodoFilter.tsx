import React from "react";
import styles from "../Todo.module.css";

interface Props {
    readonly filter: string;
    readonly onChangeFilter: (filter: string) => void;
}

const TodoFilter = ({ filter, onChangeFilter }: Props) => {
    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => onChangeFilter(e.target.value);

    return (
        <div className={styles.filter}>
            <input type="radio" value="ALL" checked={filter === "ALL"} onChange={handleFilter} id="ALL" />
            <label htmlFor="ALL">전체</label>
            <input type="radio" value="A" checked={filter === "A"} onChange={handleFilter} id="A" />
            <label htmlFor="A">미완료</label>
            <input type="radio" value="B" checked={filter === "B"} onChange={handleFilter} id="B" />
            <label htmlFor="B">완료</label>
        </div>
    );
};

export default TodoFilter;
