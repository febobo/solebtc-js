import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LanguageActions from '../actions/Language';
import NavigationBar from './Nav';
import {i18n} from '../utils/i18n';

class App extends Component {
  componentWillMount() {
    let lang = this.props.data.language;
    i18n.extend(require('../texts/' + lang + '.js').text);

    this.connectWS();
  };

  render() {
    const {dispatch} = this.props;
    const {authToken, user, language, usersOnline} = this.props.data;
    const actions = bindActionCreators(LanguageActions, dispatch);
    return (
      <main>
        <NavigationBar authToken={authToken} user={user} language={language} dispatch={dispatch} usersOnline={usersOnline} />
        {this.props.children}
      </main>
    );
  };

  connectWS() {
    console.log("connecting websocket....");
    // let ws = new WebSocket('ws://localhost:3000/v1/websocket');
    let ws = new WebSocket('ws://localhost:8080/api/v1/websocket');
    ws.onopen = (evt) => setInterval(() => ws.send('ping message'), 5000);
    ws.onmessage = (evt) => console.log('message coming ', evt.data);
    ws.onerror = (evt) => console.log('websocket error ', evt);
    ws.onclose = (evt) => console.log('websocket close ', evt);
  };
}

function select(state) {
  return {
    data: state.reducer
  };
}

export default connect(select)(App)
