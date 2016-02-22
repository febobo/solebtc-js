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
  };

  render() {
    const {dispatch} = this.props;
    const {authToken, user, language} = this.props.data;
    const actions = bindActionCreators(LanguageActions, dispatch);
    return (
      <main>
        <NavigationBar authToken={authToken} user={user} language={language} dispatch={dispatch} />
        {this.props.children}
      </main>
    );
  }
}

function select(state) {
  return {
    data: state.reducer
  };
}

export default connect(select)(App)
