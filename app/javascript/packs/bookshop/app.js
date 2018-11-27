import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import BookList from './components/bookList';
import Book from './components/book';
import NavigationBar from "./components/navbar";

const App = (props) => (
    <div>
        <NavigationBar />
        <Router>
            <div className={'container'}>
                <Switch>
                    <Route exact path='/' component={BookList}/>
                    <Route path='/books/:id' component={Book}/>
                </Switch>
            </div>
        </Router>
    </div>
);
export default App;