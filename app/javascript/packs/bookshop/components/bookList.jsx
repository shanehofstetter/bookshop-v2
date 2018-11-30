import React from 'react';
import {Api} from '../middleware/api';
import BookListItem from './bookListItem';
import {withNamespaces} from 'react-i18next';
import BookCreateForm from "./bookCreateForm";
import {Col, Row} from "reactstrap";


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
                <Row>
                    <Col md={12}>
                        <h1>{t('activerecord.models.book.other')}</h1>
                    </Col>
                    <Col md={12}>
                        <BookCreateForm className={'mb-2 mt-2'}/>
                    </Col>
                    <Col md={12}>
                        {this.state.books.map((book, index) => <BookListItem key={index} book={book}/>)}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withNamespaces('translation')(BookList);