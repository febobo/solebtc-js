import React from 'react';
import styles from '../../css/spinner.css';
var classNames = require('classnames');

function Spinner() {
  return (
    <a href="#" className="btn btn-info btn-block" disabled="true">
      <div>Loading
        <div className={styles.skFadingCircle}>
          <div className={classNames(styles.skCircle1, styles.skCircle)}></div>
          <div className={classNames(styles.skCircle2, styles.skCircle)}></div>
          <div className={classNames(styles.skCircle3, styles.skCircle)}></div>
          <div className={classNames(styles.skCircle4, styles.skCircle)}></div>
          <div className={classNames(styles.skCircle5, styles.skCircle)}></div>
          <div className={classNames(styles.skCircle6, styles.skCircle)}></div>
          <div className={classNames(styles.skCircle7, styles.skCircle)}></div>
          <div className={classNames(styles.skCircle8, styles.skCircle)}></div>
          <div className={classNames(styles.skCircle9, styles.skCircle)}></div>
          <div className={classNames(styles.skCircle10, styles.skCircle)}></div>
          <div className={classNames(styles.skCircle11, styles.skCircle)}></div>
          <div className={classNames(styles.skCircle12, styles.skCircle)}></div>
        </div>
      </div>
    </a>
  );
}

export default Spinner;
