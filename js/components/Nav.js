import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    const navButtons = this.props.loggedIn ? (
      <Nav pullRight>
        <LinkContainer to={{pathname: '/dashboard'}}>
          <NavItem href='/dashboard'>
            Dashboard
          </NavItem>
        </LinkContainer>
        <NavItem onClick={::this._logout}>
          Logout
        </NavItem>
      </Nav>
    ) : (
      <Nav pullRight>
        <LinkContainer to={{pathname: '/register'}}>
          <NavItem>Register</NavItem>
        </LinkContainer>
        <LinkContainer to={{pathname: '/login'}}>
          <NavItem>Login</NavItem>
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

export default NavigationBar;
