import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../../../css/404.css';

class NotFound extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <img src={require('../../../images/404.png')} />
          <p><a href='/'>Go back to Home</a></p>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    data: state.reducer
  };
}

export default connect(select)(NotFound)
