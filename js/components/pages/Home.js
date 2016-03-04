import React, {Component} from 'react';
import {connect} from 'react-redux';
import Advantage from '../Advantage';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Advantage />
      </div>
    )
  };
}

function select(state) {
  return {
    data: state.reducer
  };
}

export default connect(select)(Home)
