import {combineReducers} from "redux";
import {bookReducer, BookState} from "./books";

export interface AppState {
    books: BookState
}

export default combineReducers({
    books: bookReducer
});
