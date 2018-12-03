import {Provider} from "react-redux";
import * as React from "react";

import {applyMiddleware, createStore} from "redux";
import {createLogger} from 'redux-logger';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import App from "./app";

const loggerMiddleware = createLogger();

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
};

class Root extends React.Component {
    render() {
        return <Provider store={configureStore()}>
            <App/>
        </Provider>
    }
}

export default Root;