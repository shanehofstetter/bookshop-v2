import React from 'react';
import { Api } from '../middleware/api';

class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = { book: { id: props.match.params.id } };
    }

    componentDidMount() {
        Api.books.byId(this.state.book.id).then(book => {
            this.setState({ book });
        });
    }

    render() {
        return (
            <div className="book">
                <p style={{ fontWeight: 'bold' }}>{ this.state.book.title }</p>
                <p>{this.state.book.description}</p>
                <p>isbn: {this.state.book.isbn}</p>
            </div>
        )
    }

}
export default Book;
