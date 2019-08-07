import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../actions/authActions';

class Auth extends Component {
  render() {
    return (
      <div className="auth-component">
        {this.props.currentUser ? this.props.currentUser : 'Log in'}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  currentUser: state.user.currentUser,
});
export default connect(
  mapStateToProps,
  { setUser }
)(Auth);
