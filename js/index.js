import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import NotFound from './components/pages/NotFound';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('main'));
