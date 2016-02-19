import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import NotFound from './components/pages/NotFound';
import {getQueryByName} from './utils/helper';

function redirectIfNecessary(nextState, replace) {
  let query = nextState.location.search;
  let refererID = Number(getQueryByName('referer_id', nextState.location.search));
  if (refererID) {
    replace({
      pathname: '/register',
      query: {referer_id: refererID},
      state: {nextPathname: nextState.location.pathname}
    });
  }
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path='/' component={Home} onEnter={redirectIfNecessary} />
        <Route path='/register' component={Register} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('main'));
