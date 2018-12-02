import * as React from "react";
import {Button, FormGroup, Label} from 'reactstrap';
import {WithNamespaces, withNamespaces} from "react-i18next";
import {Api} from "../middleware/api";
import Form from "./forms/form";
import Text from "./forms/text";
import TextArea from "./forms/textarea";
import {withAlert} from "react-alert";
import {Book} from "../entities/book";

export interface BookCreateFormProperties extends WithNamespaces {
    alert: any;
    className?: string;
}

export interface BookCreateFormState {
    book: Book;
    errors: any;
}

class BookCreateForm extends React.Component<BookCreateFormProperties, BookCreateFormState> {
    private formApi: any;

    constructor(props) {
        super(props);
        this.state = {book: null, errors: {}};
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.getFormApi = this.getFormApi.bind(this);
    }

    handleOnSubmit(formValues) {
        this.setState({book: formValues});
        Api.books.create(this.state.book).then(book => {
            console.log('new book:', book);
            this.setState({book, errors: {}});
            this.formApi.reset();
            this.props.alert.show(`Book '${this.state.book.title}' successfully added.`, {type: 'success'});
        }).catch(formErrors => {
            this.setState((prevState) => ({...prevState, errors: formErrors}));
            this.props.alert.show('Book could not be saved.', {type: 'warning'});
        });
    }

    getFormApi(formApi) {
        this.formApi = formApi;
    }

    render() {
        const {t} = this.props;
        return <Form onSubmit={this.handleOnSubmit} getApi={this.getFormApi} className={this.props.className}>
            <FormGroup>
                <Label for={'title'}>{t('activerecord.attributes.book.title')}*</Label>
                <Text field="title" id={'title'} errors={this.state.errors.title}/>
            </FormGroup>
            <FormGroup>
                <Label for={'description'}>{t('activerecord.attributes.book.description')}*</Label>
                <TextArea field="description" id={'description'} errors={this.state.errors.description}/>
            </FormGroup>
            <FormGroup>
                <Label for={'isbn'}>{t('activerecord.attributes.book.isbn')}*</Label>
                <Text field="isbn" id={'isbn'} errors={this.state.errors.isbn}/>
            </FormGroup>
            <Button type="submit">{t('form.submit')}</Button>
        </Form>
    }
}

export default withAlert(withNamespaces('translation')<BookCreateFormProperties>(BookCreateForm));
