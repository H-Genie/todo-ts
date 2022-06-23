import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import todos from "./modules/todos";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(todos, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
