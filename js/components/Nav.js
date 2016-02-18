import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import T from 'i18n-react';

class NavigationBar extends Component {
  render() {
    const navButtons = this.props.loggedIn ? (
      <Nav pullRight>
        <LinkContainer to={{pathname: '/dashboard'}}>
          <NavItem href='/dashboard'>
            <T text="navbar.dashboard" />
          </NavItem>
        </LinkContainer>
        <NavItem onClick={::this._logout}>
          <T text="navbar.logout" />
        </NavItem>
      </Nav>
    ) : (
      <Nav pullRight>
        <LinkContainer to={{pathname: '/register'}}>
          <NavItem>
            <T text="navbar.register" />
          </NavItem>
        </LinkContainer>
        <LinkContainer to={{pathname: '/login'}}>
          <NavItem>
            <T text="navbar.login" />
          </NavItem>
        </LinkContainer>
      </Nav>
    );

    return (
      <Navbar>
        <Navbar.Header>
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
}

NavigationBar.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired
}

export default NavigationBar
