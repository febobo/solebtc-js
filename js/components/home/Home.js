import React, {Component} from 'react';
import {connect} from 'react-redux';
import Advantage from '../Advantage';
import Footer from '../Footer';

class Home extends Component {
  render() {
    return (
      <home>
        <div className='container'>
          <Advantage />
        </div>
        <Footer />
      </home>
    )
  };
}

function select(state) {
  return {
    data: state.reducer
  };
}

export default connect(select)(Home)
