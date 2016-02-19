import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Input, ButtonInput} from 'react-bootstrap';
import {i18n} from '../../utils/i18n';

class Register extends Component {
  render() {
    return (
      <form>
        <Input ref='email' type='email' label={i18n.t('register.email')} placeholder='sole@btc.com' />
        <Input ref='bitcoin' type='text' label={i18n.t('register.bitcoin_address')} placeholder='1CfyxGasCYUE5sLwpTfzR8dCbQeNHt3D14' />
        <ButtonInput type='submit' value={i18n.t('register.register')} />
      </form>
    );
  };

  _logout() {
    this.props.dispatch(logout());
  };

  _changeLanguage(evt) {
    // reload the whole page
    // as dispatch(changeLanguage($lang)) do not caused re-render
    let lang = evt.target.getAttribute('lang');
    changeLanguage(lang);
    window.location.reload();
  };
}

Register.propTypes = {
}

export default Register
