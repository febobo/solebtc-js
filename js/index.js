import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import Register from './components/pages/Register';
import NotFound from './components/pages/NotFound';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/register' component={Register} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('main'));
