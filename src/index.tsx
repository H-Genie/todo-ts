import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import todos from "./modules/todos";
import { composeWithDevTools } from "redux-devtools-extension";
import { restore } from "./modules/todos";

const store = createStore(todos, composeWithDevTools());

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
