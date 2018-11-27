import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import BookList from './components/bookList';
import Book from './components/book';

const App = (props) => (
    <Router>
        <div className={'container'}>
            <Route exact path='/' component={BookList} />
            <Route path='/books/:id' component={Book} />
        </div>
    </Router>
);
export default App;