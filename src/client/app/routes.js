import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import Home from './home.js';
import Gist from './links.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Routes extends React.Component {

    render() {
        return <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path = '/home' component = {Home} />
                    <Route path = '/gist/:director' component = {Gist} />
                </Switch>
            </div>
        </Router>
    }
}

export default Routes
