import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/main.css';
import App from './components/App';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
