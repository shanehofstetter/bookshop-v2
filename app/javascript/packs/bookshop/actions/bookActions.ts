import {Action, Dispatch} from "redux";
import {Api} from "../middleware/api";
import {Book} from "../entities/book";

export type BookActionType =
    'books_loading'
    | 'books_loaded'
    | 'add_book'
    | 'book_create_request'
    | 'book_create_failed';

export interface BookAction extends Action<BookActionType> {
    books?: Book[];
    book?: Book;
    create?: any;
}

export const add = (book: Book): BookAction => {
    return {type: 'add_book', book};
};

export const load = () => {
    return (dispatch: Dispatch<BookAction>) => {
        dispatch(loading());

        Api.books.all().then(books => {
            dispatch(loaded(books));
        })
    }
};

export const loading = (): BookAction => {
    return {type: 'books_loading'};
};

export const loaded = (books): BookAction => {
    return {type: 'books_loaded', books};
};
