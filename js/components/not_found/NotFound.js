import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../../../css/not_found/not_found.css';
import {i18n} from '../../utils/i18n';

class NotFound extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <img src={require('../../../images/not_found/not_found.png')} />
          <p><a href='/'>{i18n.t('404.go_home')}</a></p>
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
