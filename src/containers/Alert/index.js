import React from 'react';
import { connect } from 'react-redux';
import { alertUser } from '../../actions';

const Alert = ({alert}) => {
  return (
    <h3>{alert}</h3>
  )
}

const mapStateToProps = (state) => ({
  alert: state.alertMsg
})

const mapDispatchToProps = (dispatch) => ({
  alertUser: (message) => dispatch(alertUser(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Alert);