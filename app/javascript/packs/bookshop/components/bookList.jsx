import React from 'react';
import {Api} from '../middleware/api';
import BookListItem from './bookListItem';
import {withNamespaces} from 'react-i18next';


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
        const t = this.props.t;
        return (
            <div>
                <h1>{t('books.title')}</h1>
                {this.state.books.map((book, index) => <BookListItem key={index} book={book}/>)}
            </div>
        )
    }
}

export default withNamespaces('translation')(BookList);