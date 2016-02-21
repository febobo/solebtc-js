import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Input, ButtonInput, Alert} from 'react-bootstrap';
import {i18n} from '../../utils/i18n';
import {login} from '../../actions/User';
import Spinner from '../Spinner';

class Login extends Component {
  componentWillMount() {
    this.checkAuth(this.props.data.authToken);
  };

  componentWillReceiveProps(nextProps) {
    this.checkAuth(nextProps.data.authToken);
  };

  checkAuth(authToken) {
    if (authToken) {
      this.context.router.push({pathname: '/'});
    }
  };

  render() {
    const {isRequesting, error} = this.props.data.login;
    return (
      <div className='container'>
        <Row>
          <Col sm={6} md={4} mdOffset={4}>
            {error ? (
              <Alert  bsStyle='danger'>
                <p>{error}</p>
              </Alert>
            ) : (<empty></empty>)}
            <div>
              <form onSubmit={this._onSubmit.bind(this)}>
                <Input
                  ref='email'
                  type='email'
                  label={i18n.t('login.email')}
                  placeholder='sole@btc.com'
                  required
                  autoFocus />
                {isRequesting ? (
                  <div className='form-group'>
                    <Spinner />
                  </div>
                ) : (
                  <ButtonInput className='btn btn-primary btn-block' type='submit' value={i18n.t('login.login')} />
                )}
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
    this.props.dispatch(login(email));
  };
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function select(state) {
  return {
    data: state.reducer
  };
}

export default connect(select)(Login)
