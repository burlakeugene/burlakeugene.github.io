import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/main.jsx';
import * as serviceWorker from './app/serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
serviceWorker.unregister();
