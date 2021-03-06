import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Log In',
    navLink: <Link className="link-signup-button" to="/signup">Sign Up </Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action:(user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
