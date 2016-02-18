import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import { Router, Route, hashHistory } from 'react-router';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      
    </Route>
  </Router>
);

const mountNode = document.getElementById('main');

ReactDOM.render(routes, mountNode);
