import React from 'react';
import styles from '../../css/spinner.css';
var classNames = require('classnames');

function Spinner() {
  return (
    <a href="#" className="btn btn-info btn-block" disabled="true">
      <div>Loading
        <div className={styles.sk_fading_circle}>
          <div className={classNames(styles.sk_circle1, styles.sk_circle)}></div>
          <div className={classNames(styles.sk_circle2, styles.sk_circle)}></div>
          <div className={classNames(styles.sk_circle3, styles.sk_circle)}></div>
          <div className={classNames(styles.sk_circle4, styles.sk_circle)}></div>
          <div className={classNames(styles.sk_circle5, styles.sk_circle)}></div>
          <div className={classNames(styles.sk_circle6, styles.sk_circle)}></div>
          <div className={classNames(styles.sk_circle7, styles.sk_circle)}></div>
          <div className={classNames(styles.sk_circle8, styles.sk_circle)}></div>
          <div className={classNames(styles.sk_circle9, styles.sk_circle)}></div>
          <div className={classNames(styles.sk_circle10, styles.sk_circle)}></div>
          <div className={classNames(styles.sk_circle11, styles.sk_circle)}></div>
          <div className={classNames(styles.sk_circle12, styles.sk_circle)}></div>
        </div>
      </div>
    </a>
  );
}

export default Spinner;
