import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Input, ButtonInput} from 'react-bootstrap';
import T from 'i18n-react';

class Register extends Component {
  render() {
    return (
      <form>
        <Input ref='email' type='email' label='Email Address' placeholder='sole@btc.com' />
        <Input ref='bitcoin' type='text' label='Bitcoin Address' placeholder='1CfyxGasCYUE5sLwpTfzR8dCbQeNHt3D14' />
        <ButtonInput type='submit' value='Register' />
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
