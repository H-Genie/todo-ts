import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import todos from "./reducers/todos";
import { restore } from "./actions/todos";
import configureStore from "./store";

const store = configureStore(todos);

const loadData = () => {
    try {
        const data = localStorage.getItem("todo-typescript");
        if (!data) return;
        store.dispatch(restore(JSON.parse(data)));
    } catch (e) {
        console.log("localStorage is not working");
    }
};
loadData();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
