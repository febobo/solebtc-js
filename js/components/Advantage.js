import React, {Component} from 'react';
import {i18n} from '../utils/i18n';
import {Row, Col, Image} from 'react-bootstrap';

class Advantage extends Component {
  render() {
    const pStyle = {
      color: '#818181',
      fontSize: '14px',
      marginTop: '10px'
    };

    return (
      <div className='container'>
        <Row>
          <Col>
            <Image
              style={{
                float: 'left',
                marginRight: '10px',
              }}
              src={require('../../images/advantage/flag.png')}
              responsive
            />
            <span style={{
              fontSize: '16px',
              color: '#414141'
            }}><b>{i18n.t('advantage.header')}:</b></span>
          </Col>
        </Row>
        <Row style={{marginTop: '15px', marginBottom: '10px'}}>
          <Col xs={3}>
            <Image
              className='center-block'
              src={require('../../images/advantage/icon1.png')}
              responsive
            />
            <p style={pStyle} className='text-center'>{i18n.t('advantage.first_adv')}</p>
          </Col>
          <Col xs={3}>
            <Image
              className='center-block'
              src={require('../../images/advantage/icon2.png')}
              responsive
            />
            <p style={pStyle} className='text-center'>{i18n.t('advantage.second_adv')}</p>
          </Col>
          <Col xs={3}>
            <Image
              className='center-block'
              src={require('../../images/advantage/icon3.png')}
              responsive
            />
            <p style={pStyle} className='text-center'>{i18n.t('advantage.third_adv')}</p>
          </Col>
          <Col xs={3}>
            <Image
              className='center-block'
              src={require('../../images/advantage/icon4.png')}
              responsive
            />
            <p style={pStyle} className='text-center'>{i18n.t('advantage.fourth_adv')}</p>
          </Col>
        </Row>
      </div>
    );
  };
}

Advantage.propTypes = {
}

export default Advantage
