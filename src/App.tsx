import React from "react";
import Todos from "./Components/Todos";

const App = () => {
    return <Todos />;
};

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export default App;
