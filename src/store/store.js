import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import commonReducer from "./commonReducer";
import booksLibraryReducer from "./booksLibraryReducer";

let reducers = combineReducers({
    common: commonReducer,
    gBooks: booksLibraryReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

window.store = store
