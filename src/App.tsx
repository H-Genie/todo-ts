import React from "react";
import TodosContainer from "./containers/TodoContainer";

const App = () => {
    return <TodosContainer />;
};

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export default App;
