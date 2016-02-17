import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
  </Router>
, document.getElementById('main'));
