import * as React from 'react';
import {Link} from 'react-router-dom'
import {Button, Card, CardText, CardTitle, CardBody} from 'reactstrap';
import {withNamespaces, WithNamespaces} from "react-i18next";
import {Book} from "../entities/book";

export interface BookListItemProperties extends WithNamespaces {
    book: Book;
}

class BookListItem extends React.Component<BookListItemProperties> {

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;
        return (
            <div className="book">
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.book.title}</CardTitle>
                        <CardText>{this.props.book.description}</CardText>
                        <Button outline color="primary">
                            <Link to={`books/${this.props.book.id}`}>{t('link.details')}</Link>
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }

}

export default withNamespaces('translation')(BookListItem);
