import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Router, Route, hashHistory } from 'react-router';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
  </Router>
);

const mountNode = document.getElementById('main');

ReactDOM.render(routes, mountNode);
