import React, {Component} from 'react';
import {i18n} from '../utils/i18n';
import styles from '../../css/footer.css';
import {Row, Col, Image} from 'react-bootstrap';
var dateFormat = require('dateformat');

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div className={styles.footerBg}>
        <div className='container'>
          <Row>
            <Col md={4}>
              <div className={styles.footerInfo}>
                <p>
                  <img src={require('../../images/footerIco.png')} />
                  <span>
                    {i18n.t('footer.server_time')}：{dateFormat(this.state.date, 'yyyy-mm-dd hh:MM:ss', true)}
                  </span>
                </p>
                <em>{i18n.t('footer.copyright')}</em>
              </div>
            </Col>
            <Col md={4} mdOffset={4} smHidden xsHidden>
              <div className='pull-right'>
                <Image 
                  className={styles.logoImg}
                  src={require('../../images/footerLogo.png')} 
                  responsive 
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
}

Footer.propTypes = {
}

export default Footer
