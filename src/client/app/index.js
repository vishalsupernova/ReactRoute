import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import display from './reducer.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import  Home  from './home.js';

ReactDOM.render(<Provider store = {createStore (display, applyMiddleware(thunk, logger))}><Routes /></Provider>,
document.getElementById('root'));
