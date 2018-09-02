import React from 'react';
import { connect } from 'react-redux';

import { alertUser } from '../../actions';

export const Alert = ({ alertMsg }) => {
  return (
    <h4>{ alertMsg }</h4>
  )
}

const mapStateToProps = ({ alertMsg }) => ({ alertMsg })

const mapDispatchToProps = (dispatch) => ({
  alertUser: (message) => dispatch(alertUser(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Alert);