import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LanguageActions from '../actions/Language';
import NavigationBar from './Nav';
import T from 'i18n-react';

class Home extends Component {
  componentWillMount() {
    let lang = this.props.data.language;
    T.setTexts(require('../texts/' + lang + '.js').text);
  };

  render() {
    const {dispatch} = this.props;
    let loggedIn = false;
    if (this.props.data.authToken) {
      loggedIn = true;
    }
    const actions = bindActionCreators(LanguageActions, dispatch);
    return (
      <main>
        <NavigationBar loggedIn={loggedIn} language={this.props.data.language} dispatch={dispatch} />
      </main>
    );
  }
}

function select(state) {
  return {
    data: state.reducer
  };
}

export default connect(select)(Home)
