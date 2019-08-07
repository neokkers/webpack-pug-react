import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../actions/authActions';

import Example from '../App/Example';

class SomeClass extends Component {
  componentDidMount() {
    this.props.setUser('lalka');
  }

  render() {
    return (
      <div>
        {this.props.currentUser ? this.props.currentUser : 'some-component'}
        <Example />
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
)(SomeClass);
