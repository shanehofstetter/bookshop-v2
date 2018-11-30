import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import BookList from './components/bookList';
import Book from './components/book';
import NavigationBar from "./components/navbar";
import {Container} from "reactstrap";

const App = (props) => (
    <div>
        <NavigationBar />
        <Router>
            <Container>
                <Switch>
                    <Route exact path='/' component={BookList}/>
                    <Route path='/books/:id' component={Book}/>
                </Switch>
            </Container>
        </Router>
    </div>
);
export default App;