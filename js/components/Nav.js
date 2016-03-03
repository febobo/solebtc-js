import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {changeLanguage} from '../actions/Language';
import {getUser, logout} from '../actions/User';
import {i18n} from '../utils/i18n';

class NavigationBar extends Component {
  componentWillMount() {
    if (this.props.authToken) {
      this.props.dispatch(getUser());
    }
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.authToken && nextProps.authToken) {
      nextProps.dispatch(getUser());
    }
  };

  render() {
    const {authToken, user, language, usersOnline} = this.props;

    const langs = {
      'en': 'English',
      'cn': '中文'
    };

    const i18nDropdown = (
      <NavDropdown title={langs[language]} id='i18n'>
        {['en', 'cn'].map((lang, i) => {
          return (
            <MenuItem lang={`${lang}`} onClick={::this._changeLanguage} key={i}>
              {langs[lang]}
            </MenuItem>
          );
        })}
      </NavDropdown>
    );

    function userStatus(i) {
      return (
        <Navbar.Text key={i}>
          {i18n.t('navbar.' + user.status)}
        </Navbar.Text>
      );
    }

    function bitcoinBalance(i) {
      return (
        <Navbar.Text key={i}>
          {i18n.t('navbar.balance')}: {user.balance / 100000000} BTC
        </Navbar.Text>
      );
    }

    function nextRewardTime(i) {
      let lastRewarded = new Date(user.rewarded_at);
      let nextRewardTime = new Date(lastRewarded.getTime() + user.reward_interval * 1000);
      let now = new Date();
      if (nextRewardTime.getTime() < now.getTime()) {
        return (<empty key={i}></empty>);
      }
      return (
        <Navbar.Text key={i}>
          {i18n.t('navbar.next_reward_time')}: {nextRewardTime.toLocaleTimeString()}
        </Navbar.Text>
      );
    }

    const userInfo = user ? [bitcoinBalance, userStatus, nextRewardTime] : [];

    const navButtons = authToken ? (
      <Nav pullRight>
        {userInfo.map((element, i) => {
          return element(i);
        })}
        <NavItem onClick={::this._logout}>
          {i18n.t('navbar.logout')}
        </NavItem>
        {i18nDropdown}
      </Nav>
    ) : (
      <Nav pullRight>
        <Navbar.Text>
          {i18n.t('navbar.online')}: {usersOnline}
        </Navbar.Text>
        {i18nDropdown}
      </Nav>
    );

    return (
      <Navbar fluid>
        <Navbar.Header >
          <a href='/' style={{marginTop: '10px'}} className='pull-left'><img src={require('../../images/logo.png')} /></a>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse style={{marginTop: '14px', marginBottom: '10px'}}>
          {navButtons}
        </Navbar.Collapse>
      </Navbar>
    );
  };

  _logout(evt) {
    evt.preventDefault();
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
  language: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

export default NavigationBar
