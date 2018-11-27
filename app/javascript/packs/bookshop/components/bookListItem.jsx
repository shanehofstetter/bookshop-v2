import React from 'react';
import {Link} from 'react-router-dom'
import {Button, Card, CardText, CardTitle, CardBody} from 'reactstrap';

class BookListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="book">
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.book.title}</CardTitle>
                        <CardText>{this.props.book.description}</CardText>
                        <Button outline color="primary">
                            <Link to={`/books/${this.props.book.id}`}>Details</Link>
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }

}

export default BookListItem;
