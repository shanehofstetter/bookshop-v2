import * as React from 'react';
import {Api} from '../middleware/api';
import {Book} from "../entities/book";

export interface BookState {
    book: Book;
}

class BookDetail extends React.Component<{}, BookState> {

    constructor(props) {
        super(props);
        this.state = {
            book:
                {title: '', description: '', id: props.match.params.id, isbn: ''}
        };
    }

    componentDidMount() {
        Api.books.byId(this.state.book.id).then(book => {
            this.setState({book});
        });
    }

    render() {
        return (
            <div className="book">
                <p style={{fontWeight: 'bold'}}>{this.state.book.title}</p>
                <p>{this.state.book.description}</p>
                <p>isbn: {this.state.book.isbn}</p>
            </div>
        )
    }

}

export default BookDetail;
