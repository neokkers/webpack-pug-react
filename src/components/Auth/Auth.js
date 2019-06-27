import React, { Component } from 'react'
import { setUser } from '../../actions/authActions';
import { connect } from 'react-redux';
class Auth extends Component {
  
  render() {
    return (
      <div className='auth-component'>
        
        { this.props.currentUser ? this.props.currentUser : 'Log in' }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps, { setUser })(Auth)
