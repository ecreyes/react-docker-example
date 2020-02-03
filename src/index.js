import React from 'react';
import ReactDOM from 'react-dom';

//redux
import { Provider } from 'react-redux';
import store from './store';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//debug css
//import './debug.css';

import App from './components/App';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
