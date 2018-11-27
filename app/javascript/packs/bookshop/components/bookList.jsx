import React from 'react';
import {Api} from '../middleware/api';
import BookListItem from './bookListItem';

class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {
        Api.books.all().then(books => {
            this.setState({books});
        });
    }

    render() {
        return (
            <div>
                <h1>Books</h1>
                {this.state.books.map((book, index) => <BookListItem key={index} book={book}/>)}
            </div>
        )
    }
}

export default BookList;