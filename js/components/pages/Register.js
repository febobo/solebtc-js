import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {Row, Col, Input, ButtonInput} from 'react-bootstrap';
import {i18n} from '../../utils/i18n';
import {register} from '../../actions/User';
import {getQueryByName} from '../../utils/helper';

class Register extends Component {
  render() {
    return (
      <div className='container'>
        <Row>
          <Col sm={6} md={4} mdOffset={4}>
            <div>
              <form className="form-register" onSubmit={this._onSubmit.bind(this)}>
                <Input
                  ref='email'
                  type='email'
                  label={i18n.t('register.email')}
                  placeholder='sole@btc.com'
                  required
                  autoFocus />
                <Input
                  ref='bitcoin'
                  type='text'
                  label={i18n.t('register.bitcoin_address')}
                  placeholder='1CfyxGasCYUE5sLwpTfzR8dCbQeNHt3D14'
                  required />
                <ButtonInput className='btn btn-primary btn-block' type='submit' value={i18n.t('register.register')} />
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  _onSubmit(evt) {
    evt.preventDefault();
    let email = this.refs.email.getValue();
    let bitcoinAddress = this.refs.bitcoin.getValue();
    let refererID = Number(getQueryByName('referer_id', this.props.location.search));
    this.props.dispatch(register(email, bitcoinAddress, refererID || 0));
  };
}

function select(state) {
  return {
    data: state.reducer
  };
}

export default connect(select)(Register)
