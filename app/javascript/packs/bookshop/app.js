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
import AlertTemplate from "./components/alerts/alertTemplate";
import {Provider as AlertProvider} from 'react-alert'

const App = (props) => (
    <div>
        <AlertProvider template={AlertTemplate} timeout={5000}>
            <NavigationBar/>
            <Router>
                <Container>
                    <Switch>
                        <Route exact path='/' component={BookList}/>
                        <Route path='/books/:id' component={Book}/>
                    </Switch>
                </Container>
            </Router>
        </AlertProvider>
    </div>
);
export default App;