import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import NavigationBar from './Nav';

class Home extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <main>
        <NavigationBar loggedIn={this.props.loggedIn} />
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)
