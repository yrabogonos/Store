import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import toolsReducer from "./toolReducer";

let reducers = combineReducers({
    cart: cartReducer,
    tools: toolsReducer,
});

let store = createStore(reducers);

export default store;