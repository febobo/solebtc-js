import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LanguageActions from '../actions/Language';
import NavigationBar from './Nav';
import {i18n} from '../utils/i18n';
import {config} from '../config/config';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {usersOnline: 0, bitcoinPrice: 0};
  };

  componentWillMount() {
    let lang = this.props.data.language;
    i18n.extend(require('../texts/' + lang + '.js').text);

    this._stream();
  };

  render() {
    const {dispatch} = this.props;
    const {authToken, user, language} = this.props.data;
    const {usersOnline, bitcoinPrice} = this.state;
    const actions = bindActionCreators(LanguageActions, dispatch);
    return (
      <app> 
        <NavigationBar 
          authToken={authToken} 
          user={user} 
          language={language} 
          dispatch={dispatch} 
          usersOnline={usersOnline}
          bitcoinPrice={bitcoinPrice}
        />
        {this.props.children}
      </app>
    );
  };

  _stream() {
    let url = 'ws://' + config.apiServer + '/v1/websocket';
    if (config.isSSL) {
      url = 'wss://' + config.apiServer + '/v1/websocket';
    }
    console.log('connecting websocket to ', url, '...'); 

    let ws = new WebSocket(url);
    ws.onopen = (evt) => setInterval(() => ws.send('ping message'), 5000); // send ping
    ws.onerror = (evt) => console.log('websocket error ', evt);
    ws.onclose = (evt) => console.log('websocket close ', evt);
    ws.onmessage = (evt) => {
      let data = JSON.parse(evt.data);
      console.log('websocket message ', data);

      let state = this.state;

      // assign
      state = {...state,
        usersOnline: data['users_online'] || state.usersOnline,
        bitcoinPrice: data['bitcoin_price'] || state.bitcoinPrice
      }

      this.setState(state);
    };
  };
}

function select(state) {
  return {
    data: state.reducer
  };
}

export default connect(select)(App)
