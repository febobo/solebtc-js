import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LanguageActions from '../actions/Language';
import NavigationBar from './Nav';

class Home extends Component {
  render() {
    const {dispatch} = this.props;
    const {loggedIn} = this.props.data;
    const actions = bindActionCreators(LanguageActions, dispatch);
    return (
      <main>
        <NavigationBar loggedIn={loggedIn} />
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
