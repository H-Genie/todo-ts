import { legacy_createStore as createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = (reducer: Reducer) => createStore(reducer, composeWithDevTools());
export default configureStore;
