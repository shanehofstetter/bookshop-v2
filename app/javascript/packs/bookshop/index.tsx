import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './i18n';
import Root from "./root";

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root/>, document.getElementById('bookshop-app') as HTMLElement);
});
