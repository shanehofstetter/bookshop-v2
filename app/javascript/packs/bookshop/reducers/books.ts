import {BookAction} from "../actions/bookActions";
import {Book} from "../entities/book";
import {distinctById} from "../utils/listUtils";

export interface BookState {
    isLoading: boolean;
    books: Book[];
}

const initialBookState: BookState = {
    isLoading: false,
    books: []
};

export const bookReducer = (state: BookState = initialBookState, action: BookAction): BookState => {
    switch (action.type) {
        case "add_book":
            return {...state, books: distinctById<Book>([...state.books, action.book])};
        case "books_loaded":
            return {isLoading: false, books: action.books};
        case "books_loading":
            return {isLoading: true, books: []};
        default:
            return state;
    }
};
