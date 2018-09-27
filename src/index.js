import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'root'
import App from 'components/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Root>
        <App />
    </Root>, 
    document.getElementById('root'));
registerServiceWorker();
