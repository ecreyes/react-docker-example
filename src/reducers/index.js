import { combineReducers } from 'redux';
import { auth } from './auth';

const myApp = combineReducers({
    auth
});

export default myApp;