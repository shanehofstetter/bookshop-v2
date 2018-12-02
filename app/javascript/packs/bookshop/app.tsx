import * as React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import BookList from './components/bookList';
import NavigationBar from "./components/navbar";
import {Container} from "reactstrap";
import AlertTemplate from "./components/alerts/alertTemplate";
import {Provider as AlertProvider} from 'react-alert'
import {WS_ROOT} from "./config";
import {ActionCableProvider} from 'react-actioncable-provider';
import BookDetail from "./components/bookDetail";

const App = (props) => (
    <div>
        <ActionCableProvider url={WS_ROOT}>
            <AlertProvider template={AlertTemplate} timeout={5000}>
                <Router>
                    <React.Fragment>
                        <NavigationBar/>
                        <Container>
                            <Switch>
                                <Route exact path='/' component={BookList}/>
                                <Route path='/books/:id' component={BookDetail}/>
                            </Switch>
                        </Container>
                    </React.Fragment>
                </Router>
            </AlertProvider>
        </ActionCableProvider>
    </div>
);
export default App;