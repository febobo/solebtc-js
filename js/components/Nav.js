import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {changeLanguage} from '../actions/Language';
import {i18n} from '../utils/i18n';

class NavigationBar extends Component {
  render() {
    const langs = {
      'en': 'English',
      'cn': '中文'
    };

    const i18nDropdown = (
      <NavDropdown title={langs[this.props.language]} id='i18n'>
        {['en', 'cn'].map((lang, i) => {
          return (
            <MenuItem lang={`${lang}`} onClick={::this._changeLanguage} key={i}>
              {langs[lang]}
            </MenuItem>
          );
        })}
      </NavDropdown>
    );

    const navButtons = this.props.loggedIn ? (
      <Nav pullRight>
        <LinkContainer to={{pathname: '/dashboard'}}>
          <NavItem href='/dashboard'>
            {i18n.t('navbar.dashboard')}
          </NavItem>
        </LinkContainer>
        <NavItem onClick={::this._logout}>
          {i18n.t('navbar.logout')}
        </NavItem>
        {i18nDropdown}
      </Nav>
    ) : (
      <Nav pullRight>
        <LinkContainer to={{pathname: '/register'}}>
          <NavItem>
            {i18n.t('navbar.register')}
          </NavItem>
        </LinkContainer>
        <LinkContainer to={{pathname: '/login'}}>
          <NavItem>
            {i18n.t('navbar.login')}
          </NavItem>
        </LinkContainer>
        {i18nDropdown}
      </Nav>
    );

    return (
      <Navbar>
        <Navbar.Header>
          <a href='/' className='pull-left'><img src={require('../../images/logo.png')} /></a>
          <Navbar.Brand>
            <a href='/'>SoleBTC</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          {navButtons}
        </Navbar.Collapse>
      </Navbar>
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

NavigationBar.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  language: React.PropTypes.string.isRequired
}

export default NavigationBar
