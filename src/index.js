import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Root from 'root'
import App from 'components/App';
import 'bootstrap/dist/css/bootstrap.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path='/' component={App} />
        </BrowserRouter>
    </Root>, 
    document.getElementById('root'));
registerServiceWorker();
